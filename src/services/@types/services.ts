import {
  IAuthenticationRequestDto,
  IAuthenticationResponseDto,
  ICreateNewUserRequestDto,
  ICreateNewUserResponseDto,
  UserDto,
  IUpdateUserDto,
  IFilterUserProps,
} from '../../global/dataTransferObjects/user';
import { IApiResponse } from '../providers/types';
import { IAsyncApiPagedResponse, IPagedResult } from '../../global/generics';
import { ICreateNewProjectRequestDto, IFilterProjectDto, IProjectDto } from '../../global/dataTransferObjects/project';

export interface IUserService {
  refreshAccessToken(refreshToken: string): Promise<IApiResponse<IAuthenticationResponseDto>>;
  getCurrentUser(): Promise<UserDto>;
  getAllUsers(offset: number, pageSize: number, filter?: IFilterUserProps): Promise<IApiResponse<IPagedResult<UserDto>>>;
  authenticate(userInfo: IAuthenticationRequestDto): Promise<IApiResponse<IAuthenticationResponseDto>>;
  createNewUser(userInfo: ICreateNewUserRequestDto): Promise<IApiResponse<UserDto>>;
  deleteUser(userId: string): Promise<IApiResponse<any>>;
  updateUser(userId: string, userUpdate: IUpdateUserDto): Promise<IApiResponse<any>>;
}

export interface IProjectService {
  getAllProjects(offset: number, pageSize: number, filter?: IFilterProjectDto): IAsyncApiPagedResponse<IProjectDto>;
  createNewProject(requestDto: ICreateNewProjectRequestDto): Promise<IApiResponse<IProjectDto>>;
}
