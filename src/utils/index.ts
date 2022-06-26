import { IObjectUtils } from './types';

export const objectUtils = (): IObjectUtils => {
  const serializeObject = <T>(object: T):string => JSON.stringify(object);
  const deserializeObject = <T>(value: string): T => JSON.parse(value) as T;

  return ({
    serializeObject,
    deserializeObject,
  });
};
