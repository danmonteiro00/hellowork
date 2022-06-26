import { IUserService } from '../@types/services';
import { createApi } from '../providers/factories';
import { userService } from './userService';

export const createUserService = (): IUserService => {
  const apiProvider = createApi();
  return userService(apiProvider);
};
