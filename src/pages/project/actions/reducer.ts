import { ActionTypes, IAction, IPageState } from "./types";

export const InitialState: IPageState = {
  loading: false,
  projects: {
    count: 0,
    offset: 0,
    records: [],
    pageSize: 20,
  },
  isModalOpen: false,
};

export const Reducer = (state: IPageState, action: IAction): IPageState => {
  switch (action.type) {
    case ActionTypes.UPDATE_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload?.status ?? false,
      };
    case ActionTypes.UPDATE_PROJECTS:
      return {
        ...state,
        loading: false,
        projects: action.payload?.projects ?? { ...InitialState.projects },
      };
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case ActionTypes.UPDATE_MODAL_STATUS:
      return {
        ...state,
        isModalOpen: action.payload.status ?? false,
      };
    case ActionTypes.CREATE_NEW_PROJECT:
      return {
        ...state,
        loading: false,
        isModalOpen: false,
      }
    default:
      return { ...state };
  }
};
