import { IStorageProvider } from '../@types/providers';

export default (): IStorageProvider => {
  const { localStorage } = window;

  const clear = () => {
    localStorage.clear();
  };

  const setKey = (key: string, value: string) => {
    localStorage.setItem(key, value);
    return value;
  };

  const getKey = (key: string): string | null => localStorage.getItem(key);

  const removeKey = (key: string) => {
    localStorage.removeItem(key);
  };

  const getKeyAsync = (key: string): Promise<string> => new Promise<string>((resolve, reject) => {
    const value = getKey(key);
    if (!value) {
      return reject(new Error('Key not found'));
    }

    return value;
  });

  const setKeyAsync = (key: string, value: string): Promise<string> => new Promise((resolve) => {
    localStorage.setItem(key, value);
    return resolve(value);
  });

  return ({
    clear,
    setKey,
    getKey,
    removeKey,
    getKeyAsync,
    setKeyAsync,
  });
};
