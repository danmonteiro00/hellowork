import { IObjectMap } from '../../global/types';

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403
}

export enum HttpMethod {
  GET = 0,
  POST = 1,
  DELETE = 2,
  PUT = 3,
  PATCH = 4
}

export interface IApiResponse<T> {
  statusCode: number;
  requestId: string;
  response: T;
  message?: string;
}

export interface ITecpayRequest<T> {
  data?: T,
  url: string,
  parameters?: IObjectMap,
  search?: IObjectMap,
  method?: HttpMethod,
  hasAuthentication?: boolean,
  headers?: any,
}

export interface IRequestBuilder<T, TU> {
  withToken(schema: string, accessToken: string): IRequestBuilder<T, TU>;
  withData(requestData: T): IRequestBuilder<T, TU>;
  withSearch(searchObj: IObjectMap): IRequestBuilder<T, TU>;
  withMethod(method: HttpMethod): IRequestBuilder<T, TU>;
  withParameters(newParams: IObjectMap): IRequestBuilder<T, TU>;
  addHeader(name: string, value: string): IRequestBuilder<T, TU>;
  sendAsync(): Promise<IApiResponse<TU>>;
  useAuthentication(value?: boolean): IRequestBuilder<T, TU>;
}

export interface ITecpayApi {
  createRequest<TU>(params: ITecpayRequest<unknown>): IRequestBuilder<unknown, TU>;
  createRequest<T, TU>(params: ITecpayRequest<T>): IRequestBuilder<T, TU>,
}
