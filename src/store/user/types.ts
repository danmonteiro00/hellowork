export interface UpdateUserInfo { id: string }

export enum UserActionTypes {
  Logout = '@user/LOGOUT',
  UpdateUserInfo = '@user/UPDATE_USER_INFO',
  AuthenticateRequest = '@user/AUTHENTICATE_REQUEST',
  AuthenticateSuccess = '@user/AUTHENTICATE_SUCCESS',
  AuthenticateFailure = '@user/AUTHENTICATE_FAILURE',
  CreateNewUserRequest = '@user/CREATE_NEW_USER_REQUEST',
  CreateNewUserSuccess = '@user/CREATE_NEW_USER_SUCCESS',
  CreateNewUserFailure = '@user/CREATE_NEW_USER_FAILURE',
}
