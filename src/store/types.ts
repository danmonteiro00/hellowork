import { UserDto } from '../global/dataTransferObjects/user';

export interface IUserState {
  isAuthenticated: boolean,
  loading: boolean,
  userInfo: UserDto,
}

export interface IAppState {
  user: IUserState,
}
