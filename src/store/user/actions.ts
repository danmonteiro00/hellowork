import { Dispatch } from 'redux';
import { toast } from 'react-toastify';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { UpdateUserInfo, UserActionTypes } from './types';
import {
  IAuthenticationRequestDto,
  IAuthenticationResponseDto,
  ICreateNewUserRequestDto,
  ICreateNewUserResponseDto,
} from '../../global/dataTransferObjects/user';
import { createUserService } from '../../services/user';
import { createAuthenticationProvider } from '../../services/providers/factories';

const getSignUpMessageByStatus = (status: number): string => {
  switch (status) {
    case 201:
      return 'Usuario criado com sucesso! Efetue o login agora.';
    case 400:
      return 'Informações para cadastro de usuário inválidas!';
    case 409:
      return 'Já existe um usuário com esse email ou número de documento.';
    default:
      return 'Houve um erro ao efetuar seu cadastro!';
  }
};

const getSignInMessageByStatus = (status: number): string => {
  switch (status) {
    case 401:
      return 'Email ou senha inválidos.';
    default:
      return 'Houve um erro ao efetuar o login!';
  }
};

export const updateUserInfo = createAction(UserActionTypes.UpdateUserInfo)<UpdateUserInfo>();

export const authenticateUserActions = createAsyncAction(
  UserActionTypes.AuthenticateRequest,
  UserActionTypes.AuthenticateSuccess,
  UserActionTypes.AuthenticateFailure,
)<boolean, IAuthenticationResponseDto, string>();

export const createNewUserActions = createAsyncAction(
  UserActionTypes.CreateNewUserRequest,
  UserActionTypes.CreateNewUserSuccess,
  UserActionTypes.CreateNewUserFailure,
)<boolean, ICreateNewUserResponseDto, string>();

export const doLogout = () => (dispatch: Dispatch): void => {
  const authenticationProvider = createAuthenticationProvider();
  authenticationProvider.clearAuthenticationData();

  dispatch({ type: UserActionTypes.Logout });
};

export const liftSession = () => async (dispatch: Dispatch): Promise<boolean> => {
  const userService = createUserService();
  const authProvider = createAuthenticationProvider();
  const tokenDto = authProvider.getAuthenticationRefreshToken();
  if (!tokenDto) {
    doLogout()(dispatch);
    return true;
  }

  const authData = await userService.refreshAccessToken(tokenDto);
  if (!authData || authData.statusCode !== 201) {
    doLogout()(dispatch);
    return true;
  }

  authProvider.setAuthenticationInfo(authData.response);
  dispatch(authenticateUserActions.success(authData.response));
  return true;
};

export const authenticateUser = (userInfo: IAuthenticationRequestDto) => async (dispatch: Dispatch): Promise<void> => {
  const userService = createUserService();
  const authProvider = createAuthenticationProvider();
  dispatch(authenticateUserActions.request(true));
  const authData = await userService.authenticate(userInfo);
  const message = getSignInMessageByStatus(authData.statusCode);

  if (!authData || authData.statusCode !== 201) {
    toast.error(message);
    dispatch(authenticateUserActions.failure(message));
    return;
  }

  authProvider.setAuthenticationInfo(authData.response);
  dispatch(authenticateUserActions.success(authData.response));
};

export const createNewUser = (userInfo: ICreateNewUserRequestDto) => async (dispatch: Dispatch): Promise<boolean> => {
  const userService = createUserService();
  dispatch(createNewUserActions.request(true));
  const createdUser = await userService.createNewUser(userInfo);
  const message = getSignUpMessageByStatus(createdUser.statusCode);

  if (!createdUser || createdUser.statusCode !== 201) {
    toast.error(createdUser.message ?? message);
    dispatch(createNewUserActions.failure(createdUser.message ?? message));
    return false;
  }

  toast.success(createdUser.message ?? message);
  dispatch(createNewUserActions.success(createdUser.response));
  return true;
}
