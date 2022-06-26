export interface IProjectDto {
  name: string;
  description?: string;
  price: number;
}

export interface IFilterProjectDto {
  name?: string;
  startDate?: string;
  finishDate?: string;
}

export interface ICreateNewProjectRequestDto {
  name: string;
  description: string;
  price: number;
}
