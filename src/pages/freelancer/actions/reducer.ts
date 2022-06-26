import { ActionTypes, IAction, IPageState } from "./types";

export const InitialState: IPageState = {
  loading: false,
  freelancers: {
    count: 0,
    offset: 0,
    records: [],
    pageSize: 20,
  },
};

export const Reducer = (state: IPageState, action: IAction): IPageState => {
  switch (action.type) {
    case ActionTypes.UPDATE_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload?.status ?? false,
      };
    case ActionTypes.UPDATE_FREELANCERS:
      return {
        ...state,
        loading: false,
        freelancers: action.payload?.freelancers ?? { ...InitialState.freelancers },
      };
    default:
      return { ...state };
  }
};
