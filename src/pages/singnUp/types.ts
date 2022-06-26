import { ICreateNewUserRequestDto } from '../../global/dataTransferObjects/user';

export interface ISignUpProps {
  createNewUser(userInfo: ICreateNewUserRequestDto): Promise<boolean>,
  isAuthenticated: boolean,
  isLoading: boolean,
}
