import { IApiResponse } from '../services/providers/types';

export class ApiException<T> extends Error {
  public response: IApiResponse<T>;

  constructor(apiResponse: IApiResponse<T>) {
    super(apiResponse.message);
    this.response = apiResponse;
  }
}
