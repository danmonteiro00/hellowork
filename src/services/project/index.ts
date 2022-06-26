import { IProjectService } from '../@types/services';
import { createApi } from '../providers/factories';
import { projectService } from './projectService';

export const createProjectService = (): IProjectService => {
  const apiProvider = createApi();
  return projectService(apiProvider);
};
