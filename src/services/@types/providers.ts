import { IConfig } from '../../config/types';
import { IAuthenticationResponseDto } from '../../global/dataTransferObjects/user';

export interface IAuthenticationProvider {
  getAuthenticationToken(): string | null,
  getAuthenticationRefreshToken(): string | null,
  clearAuthenticationData(): void;
  setAuthenticationInfo(userInfo: IAuthenticationResponseDto): void;
}

export interface IStorageProvider {
  clear(): void;
  setKey(key: string, value: string): void;
  getKey(key: string): string | null;
  removeKey(key: string): void;
  getKeyAsync(key: string): Promise<string>;
  setKeyAsync(key: string, value: string): Promise<string>;
}

export interface IConfigurationProvider {
  getConfig(): IConfig;
  get(key: string): string | number | null;
}

export interface ISecurityProvider {
  createUuid(): string;
}

export interface IFormatProvider {
  convertFromCents: (amount: number) => string;
  formatPrice: (price: number) => string;
  formatDate: (date: Date | number) => string;
  formatCpf: (numeroDocumento: string) => string;
  formatCnpj: (numeroDocumento: string) => string;
}
