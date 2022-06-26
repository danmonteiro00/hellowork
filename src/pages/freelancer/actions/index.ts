import { Dispatch } from "react";
import { toast } from "react-toastify";
import { UserDto } from "../../../global/dataTransferObjects/user";
import { IPagedResult } from "../../../global/generics";
import { createUserService } from "../../../services/user";
import { ActionTypes } from "./types";

export const onUpdateLoadingStatus = (status = false) => (dispatch: Dispatch<any>): void => dispatch({
  type: ActionTypes.UPDATE_LOADING_STATUS,
  payload: {
    status,
  },
});

export const onUpdateFreelancers = (freelancers: IPagedResult<UserDto>) => (dispatch: Dispatch<any>): void => dispatch({
  type: ActionTypes.UPDATE_FREELANCERS,
  payload: {
    freelancers: { ...freelancers },
  },
});

export const getAllFreelancers = (pageSize = 20, offset = 0) => async (dispatch: Dispatch<any>): Promise<void> => {
  const userService = createUserService();
  onUpdateLoadingStatus(true)(dispatch);

  const result = await userService.getAllUsers(offset, pageSize);
  if (result.statusCode !== 200) {
    toast.error(result.message);
    return;
  }

  onUpdateFreelancers(result.response)(dispatch);
};
