import { IConfig } from './types';

const Config: IConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  ibgeBaseUrl: 'https://servicodados.ibge.gov.br/api',
  viaCepBaseUrl: 'https://viacep.com.br/ws',
}

export default Config;
