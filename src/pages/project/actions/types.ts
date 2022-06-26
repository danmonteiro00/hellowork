import { IProjectDto } from "../../../global/dataTransferObjects/project";
import { IPagedResult } from "../../../global/generics";

export interface IPageState {
  loading: boolean;
  projects: IPagedResult<IProjectDto>;
  isModalOpen: boolean;
}

export enum ActionTypes {
  UPDATE_LOADING_STATUS = 'UPDATE_LOADING_STATUS',
  UPDATE_PROJECTS = 'UPDATE_PROJECTS',
  OPEN_MODAL = 'OPEN_MODAL',
  UPDATE_MODAL_STATUS = 'UPDATE_MODAL_STATUS',
  CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT',
}

export interface IAction {
  type: ActionTypes;
  payload?: any;
}
