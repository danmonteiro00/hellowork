import { Dispatch } from "react";
import { toast } from "react-toastify";
import { IFormValues } from "../../../components/RegisterProjectModal/types";
import { ICreateNewProjectRequestDto, IProjectDto } from "../../../global/dataTransferObjects/project";
import { IPagedResult } from "../../../global/generics";
import { createProjectService } from "../../../services/project";
import { createUserService } from "../../../services/user";
import { ActionTypes } from "./types";

export const onUpdateLoadingStatus = (status = false) => (dispatch: Dispatch<any>): void => dispatch({
  type: ActionTypes.UPDATE_LOADING_STATUS,
  payload: {
    status,
  },
});

export const onUpdateProjects = (projects: IPagedResult<IProjectDto>) => (dispatch: Dispatch<any>): void => dispatch({
  type: ActionTypes.UPDATE_PROJECTS,
  payload: {
    projects: { ...projects },
  },
});

export const onOpenModal = () => (dispatch: Dispatch<any>): void => dispatch({
  type: ActionTypes.OPEN_MODAL,
});

export const onUpdateModalStatus = (status = false) => (dispatch: Dispatch<any>): void => dispatch({
  type: ActionTypes.UPDATE_MODAL_STATUS,
  payload: { status },
});

export const onCreateNewProject = () => (dispatch: Dispatch<any>): void => dispatch({
  type: ActionTypes.CREATE_NEW_PROJECT,
});

export const getAllProjects = (pageSize = 20, offset = 0) => async (dispatch: Dispatch<any>): Promise<void> => {
  const projectService = createProjectService();
  onUpdateLoadingStatus(true)(dispatch);

  const result = await projectService.getAllProjects(offset, pageSize);
  if (result.statusCode !== 200) {
    toast.error(result.message);
    return;
  }

  onUpdateProjects(result.response)(dispatch);
};

export const createNewProject = (values: IFormValues) => async (dispatch: Dispatch<any>): Promise<boolean> => {
  const projectService = createProjectService();
  onUpdateLoadingStatus(true)(dispatch);

  const formattedValues: ICreateNewProjectRequestDto = {
    ...values,
    price: parseFloat(values.price),
  }

  const result = await projectService.createNewProject({ ...formattedValues });
  if (result.statusCode !== 201) {
    toast.error(result.message ?? 'Houve um erro ao cadastrar o projeto');
    onUpdateLoadingStatus(false)(dispatch);
    return false;
  }

  onCreateNewProject()(dispatch);
  return true;
};
