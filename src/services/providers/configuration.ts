import { IConfig } from '../../config/types';
import Config from '../../config';
import { IConfigurationProvider } from '../@types/providers';

export default (): IConfigurationProvider => {
  const getConfig = (): IConfig => Config;

  const get = (key: string): string | number | null => {
    const map = new Map(Object.entries({ ...Config }));
    const configValue = map.get(key);
    if (!configValue) {
      throw new Error(`No configuration found with key ${key}`);
    }

    return configValue;
  };

  return ({
    get,
    getConfig,
  })
};
