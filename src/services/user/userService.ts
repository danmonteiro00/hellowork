import {
  IAuthenticationRequestDto,
  IAuthenticationResponseDto,
  ICreateNewUserRequestDto,
  ICreateNewUserResponseDto,
  UserDto,
  IUpdateUserDto,
  IFilterUserProps,
} from '../../global/dataTransferObjects/user';
import { IPagedResult } from '../../global/generics';
import { IUserService } from '../@types/services';
import { HttpMethod, IApiResponse, ITecpayApi } from '../providers/types';
import { ApiException } from '../../global/exceptions';

export const userService = (apiProvider: ITecpayApi): IUserService => {
  const authenticate = async (userInfo: IAuthenticationRequestDto) => {
    const payload = { ...userInfo };
    return apiProvider
      .createRequest<IAuthenticationRequestDto, IAuthenticationResponseDto>({ url: '/sessions' })
      .withMethod(HttpMethod.POST)
      .useAuthentication(false)
      .withData(payload)
      .sendAsync();
  };

  const refreshAccessToken = (refreshToken: string): Promise<IApiResponse<IAuthenticationResponseDto>> => {
    const payload: IAuthenticationRequestDto = { refreshToken, grantType: 'refresh_token' };
    return apiProvider
      .createRequest<IAuthenticationRequestDto, IAuthenticationResponseDto>({ url: '/sessions' })
      .withMethod(HttpMethod.POST)
      .useAuthentication(false)
      .withData(payload)
      .sendAsync();
  };

  const getCurrentUser = async (): Promise<UserDto> => {
    const response = await apiProvider
      .createRequest<UserDto>({ url: '/user/me' })
      .sendAsync();

    if (response.statusCode !== 200) {
      throw new ApiException(response);
    }

    return response.response;
  };

  const getAllUsers = async (
    offset: number,
    pageSize: number,
    filter: IFilterUserProps,
  ): Promise<IApiResponse<IPagedResult<UserDto>>> => {
    const name = filter?.name || null;
    const email = filter?.email || null;
    const documentNumber = filter?.documentNumber || null;
    const startDate = filter?.startDate || null;
    const finishDate = filter?.finishDate || null;
    const response = await apiProvider
      .createRequest<IPagedResult<UserDto>>({ url: '/users' })
      .withSearch({
        offset,
        pageSize,
        name,
        email,
        documentNumber,
        startDate,
        finishDate,
      })
      .sendAsync();

    if (response.statusCode !== 200) {
      throw new ApiException(response);
    }

    return response;
  };

  const createNewUser = async (userInfo: ICreateNewUserRequestDto): Promise<IApiResponse<UserDto>> => {
    const payload = { ...userInfo };
    return apiProvider
      .createRequest<ICreateNewUserRequestDto, UserDto>({ url: '/user' })
      .withMethod(HttpMethod.POST)
      .useAuthentication(false)
      .withData({ ...payload })
      .sendAsync();
  }

  const deleteUser = async (userId: string): Promise<IApiResponse<any>> => apiProvider
    .createRequest<any>({ url: `/user/${userId}` })
    .withMethod(HttpMethod.DELETE)
    .sendAsync();

  const updateUser = async (userId: string, userUpdate: IUpdateUserDto): Promise<IApiResponse<any>> => {
    const payload = { ...userUpdate };
    return apiProvider
      .createRequest<any>({ url: `/user/${userId}` })
      .withMethod(HttpMethod.PUT)
      .withData(payload)
      .sendAsync();
  }
  return ({
    refreshAccessToken,
    getCurrentUser,
    getAllUsers,
    authenticate,
    createNewUser,
    deleteUser,
    updateUser,
  });
};
