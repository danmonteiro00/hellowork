import tecpayApi from './api';
import configurationProvider from './configuration'
import storageProvider from './storage';
import authenticationProvider from './authentication';
import securityProvider from './security';
import formatProvider from './format';
import {
  IAuthenticationProvider,
  IConfigurationProvider,
  IStorageProvider,
  ISecurityProvider,
  IFormatProvider,
} from '../@types/providers';
import { ITecpayApi } from './types';
import { objectUtils } from '../../utils';

export const createStorageProvider = (): IStorageProvider => storageProvider();

export const createConfigurationProvider = (): IConfigurationProvider => configurationProvider();

export const createAuthenticationProvider = (): IAuthenticationProvider => {
  const storageProviderInstance = createStorageProvider();
  const objectUtilsInstance = objectUtils();
  return authenticationProvider(storageProviderInstance, objectUtilsInstance);
};

export const createApi = (): ITecpayApi => {
  const authProvider = createAuthenticationProvider();
  const configProvider = createConfigurationProvider();

  return tecpayApi(authProvider, configProvider);
};

export const createSecurityProvider = (): ISecurityProvider => securityProvider();

export const createFormatProvider = (): IFormatProvider => formatProvider();
