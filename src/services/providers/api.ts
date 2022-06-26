import axios, {
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

import { IAuthenticationProvider, IConfigurationProvider } from '../@types/providers';
import {
  HttpMethod,
  ITecpayApi,
  IApiResponse,
  ITecpayRequest,
  IRequestBuilder, HttpStatus,
} from './types';
import { IObjectMap } from '../../global/types';

export const createAxiosInstance = (
  hasAuthentication: boolean,
  authProvider: IAuthenticationProvider,
  configProvider: IConfigurationProvider,
): AxiosInstance => {
  const { apiBaseUrl } = configProvider.getConfig();
  const axiosInstance = axios.create({ baseURL: apiBaseUrl });

  // const handleBadRequestMessages = (errorResponse: AxiosResponse<any>): void => {
  //   const parsedResponse = errorResponse as AxiosResponse<IApiResponse<IApiErrorDto[]>>;
  //   const { data } = errorResponse;
  //   if (!data || !(data.response instanceof Array) || parsedResponse.data.response.length === 0) {
  //     toast.error(data.message);
  //     return;
  //   }
  //
  //   parsedResponse.data.response.forEach((error) => {
  //     toast.error(error.message);
  //   });
  // };

  const handleTokenRefresh = async (): Promise<boolean> => true;

  const requestInterceptorHandler = (config: AxiosRequestConfig) => {
    if (!hasAuthentication) {
      return config;
    }

    const token = authProvider.getAuthenticationToken();
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const erroResponseInterceptorHandler = async (error: AxiosError) => {
    const newError = { ...error } as AxiosError;
    const errorResponse = newError.response as AxiosResponse<IApiResponse<Record<string, unknown>>>;

    if (!errorResponse) {
      return ({ status: 500 });
    }

    // if (errorResponse.status === HttpStatus.BAD_REQUEST) {
    //   handleBadRequestMessages(errorResponse);
    // }

    if (errorResponse.status === HttpStatus.UNAUTHORIZED) {
      await handleTokenRefresh();
    }

    return ({ ...errorResponse });
  };

  axiosInstance.interceptors.request.use(requestInterceptorHandler);
  axiosInstance.interceptors.response.use((response) => response, erroResponseInterceptorHandler);

  return axiosInstance;
};

export default (
  authProvider: IAuthenticationProvider,
  configProvider: IConfigurationProvider,
): ITecpayApi => {
  const requestHandlerFactory = (method: HttpMethod, hasAuthentication: boolean) => {
    const axiosInstance = createAxiosInstance(hasAuthentication, authProvider, configProvider);
    switch (method) {
      case HttpMethod.DELETE:
        return axiosInstance.delete;
      case HttpMethod.PUT:
        return axiosInstance.put;
      case HttpMethod.POST:
        return axiosInstance.post;
      case HttpMethod.GET:
        return axiosInstance.get;
      case HttpMethod.PATCH:
        return axiosInstance.patch;
      default:
        throw new Error('Invalid HttpRequest method');
    }
  };

  const createRequest = <T, TU> (params: ITecpayRequest<T>): IRequestBuilder<T, TU> => {
    const {
      url,
      data,
      search = {},
      parameters = {},
      headers = new Map<string, string>(),
      method = HttpMethod.GET,
      hasAuthentication = true,
    } = params;

    const composeRequestConfig = (): AxiosRequestConfig => {
      if (method === null || !(method in HttpMethod)) {
        throw new Error('Request must have a Http method!');
      }

      return ({
        data,
        params: search,
        headers: { ...headers },
      });
    };

    const addHeader = (name: string, value: string): IRequestBuilder<T, TU> => createRequest({
      ...params,
      headers: {
        ...headers,
        [name]: value,
      },
    });

    const withSearch = (searchObj: IObjectMap): IRequestBuilder<T, TU> => createRequest({
      ...params,
      search: { ...searchObj },
    });

    const withToken = (schema: string, accessToken: string): IRequestBuilder<T, TU> => {
      if (!schema || !accessToken) {
        throw new Error('Missing schema or access token');
      }

      return createRequest<T, TU>({
        ...params,
      }).addHeader('Authorization', `${schema} ${accessToken}`);
    };

    const withData = (requestData: T): IRequestBuilder<T, TU> => createRequest({
      ...params,
      data: requestData,
    });

    const useAuthentication = (value?: boolean): IRequestBuilder<T, TU> => createRequest({
      ...params,
      hasAuthentication: value ?? true,
    });

    const withMethod = (httpMethod: HttpMethod): IRequestBuilder<T, TU> => createRequest({
      ...params,
      method: httpMethod,
    });

    const withParameters = (newParams: IObjectMap): IRequestBuilder<T, TU> => createRequest({
      ...params,
      parameters: { ...newParams },
    });

    const mapUrl = (currentUrl: string, objectParams: IObjectMap): string => {
      const objectKeys = Object.keys(objectParams);
      return objectKeys.reduce((acc: string, currentValue: string) => {
        const key = `:${currentValue}`;
        const value = objectParams[currentValue];
        return acc.replace(key, value);
      }, currentUrl);
    };

    const sendAsync = async (): Promise<IApiResponse<TU>> => {
      const requestConfig = composeRequestConfig();
      const requestHandler = requestHandlerFactory(method, hasAuthentication);
      const newUrl = mapUrl(url, parameters);
      const response = await requestHandler(newUrl, { ...requestConfig.data, params: { ...search } }, { ...requestConfig });

      const responseData = response.data as IApiResponse<TU>;
      return ({ ...responseData });
    };

    return ({
      ...params,
      addHeader,
      withData,
      withToken,
      withMethod,
      withParameters,
      withSearch,
      sendAsync,
      useAuthentication,
    });
  }

  return ({
    createRequest,
  });
};
