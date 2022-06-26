import { IAuthenticationRequestDto } from '../../global/dataTransferObjects/user';

export interface ISignInProps {
  isLoading: boolean;
  isAuthenticated: boolean;
  authenticateUser(userInfo: IAuthenticationRequestDto): Promise<void>;
}
