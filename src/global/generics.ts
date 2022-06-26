import { IApiResponse } from '../services/providers/types';

export interface IPagedResult<T> {
  offset: number;
  pageSize: number;
  count: number;
  records: Array<T>,
}

export type IApiPagedResponse<T> = IApiResponse<IPagedResult<T>>;
export type IAsyncApiPagedResponse<T> = Promise<IApiPagedResponse<T>>;
