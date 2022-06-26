import { UserDto } from "../../../global/dataTransferObjects/user";
import { IPagedResult } from "../../../global/generics";

export interface IPageState {
  loading: boolean;
  freelancers: IPagedResult<UserDto>;
}

export enum ActionTypes {
  UPDATE_LOADING_STATUS = 'UPDATE_LOADING_STATUS',
  UPDATE_FREELANCERS = 'UPDATE_FREELANCERS',
}

export interface IAction {
  type: ActionTypes;
  payload?: any;
}
