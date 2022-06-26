export interface IErrorMessages {
  [key: number]: string
}

export interface IObjectUtils {
  serializeObject<T>(object: T): string;
  deserializeObject<T>(value: string): T;
}
