import { Reducer } from 'redux';
import { UserActionTypes } from './types';
import { IUserState } from '../types';

const INITIAL_STATE: IUserState = {
  isAuthenticated: false,
  loading: false,
  userInfo: {
    fullName: '',
    userType: 0,
    personType: 0,
    documentNumber: '',
    email: '',
  },
};

export const UserReducer: Reducer<IUserState> = (state: IUserState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.Logout:
      return { ...INITIAL_STATE };
    case UserActionTypes.AuthenticateRequest:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.AuthenticateFailure:
      return {
        ...state,
        loading: false,
      };
    case UserActionTypes.AuthenticateSuccess:
      return {
        ...state,
        loading: false,
        userInfo: { ...action.payload.userInfo },
        isAuthenticated: true,
      };
    case UserActionTypes.UpdateUserInfo:
      return {
        ...state,
      };
    case UserActionTypes.CreateNewUserRequest:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.CreateNewUserFailure:
      return {
        ...state,
        loading: false,
      };
    case UserActionTypes.CreateNewUserSuccess:
      return {
        ...state,
        loading: false,
        userInfo: { ...action.payload.userInfo },
      };
    default:
      return state;
  }
};
