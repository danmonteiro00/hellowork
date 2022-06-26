import { IAuthenticationProvider, IStorageProvider } from '../@types/providers';
import { IAuthenticationResponseDto, TokenDto } from '../../global/dataTransferObjects/user';
import { IObjectUtils } from '../../utils/types';

export enum AuthenticationKeys {
  UserInfo = 'userInfo',
  AccessToken = 'accessToken',
  RefreshToken = 'refreshToken',
}

export default (storageProvider: IStorageProvider, objectUtils: IObjectUtils): IAuthenticationProvider => {
  const getToken = (key: string): TokenDto | null => {
    const savedValue = storageProvider.getKey(key);
    if (!savedValue) {
      return null;
    }

    return objectUtils.deserializeObject<TokenDto>(savedValue);
  }

  const getAuthenticationRefreshToken = (): string | null => getToken(AuthenticationKeys.RefreshToken)?.token ?? null;

  const getAuthenticationToken = (): string | null => getToken(AuthenticationKeys.AccessToken)?.token ?? null;

  const setAuthenticationInfo = (storageInfo: IAuthenticationResponseDto): void => {
    const { userInfo, accessToken, refreshToken } = storageInfo;
    storageProvider.setKey(AuthenticationKeys.UserInfo, objectUtils.serializeObject(userInfo));
    storageProvider.setKey(AuthenticationKeys.AccessToken, objectUtils.serializeObject(accessToken));
    storageProvider.setKey(AuthenticationKeys.RefreshToken, objectUtils.serializeObject(refreshToken));
  };

  const clearAuthenticationData = (): void => {
    storageProvider.removeKey(AuthenticationKeys.UserInfo);
    storageProvider.removeKey(AuthenticationKeys.AccessToken);
    storageProvider.removeKey(AuthenticationKeys.RefreshToken);
  };

  return ({
    getAuthenticationToken,
    setAuthenticationInfo,
    clearAuthenticationData,
    getAuthenticationRefreshToken,
  });
};
