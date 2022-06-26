import { ICreateNewProjectRequestDto, IFilterProjectDto, IProjectDto } from "../../global/dataTransferObjects/project";
import { ApiException } from "../../global/exceptions";
import { IAsyncApiPagedResponse, IPagedResult } from "../../global/generics";
import { IProjectService } from "../@types/services";
import { HttpMethod, IApiResponse, ITecpayApi } from "../providers/types";

export const projectService = (apiProvider: ITecpayApi): IProjectService => {
  const getAllProjects = async (
    offset: number,
    pageSize: number,
    filter: IFilterProjectDto,
  ): IAsyncApiPagedResponse<IProjectDto> => {
    const name = filter?.name || null;
    const startDate = filter?.startDate || null;
    const finishDate = filter?.finishDate || null;

    const response = await apiProvider
      .createRequest<IPagedResult<IProjectDto>>({ url: '/projects' })
      .withSearch({
        offset,
        pageSize,
        name,
        startDate,
        finishDate,
      })
      .sendAsync();

    if (response.statusCode !== 200) {
      throw new ApiException(response);
    };

    return response;
  };

  const createNewProject = async (requestDto: ICreateNewProjectRequestDto): Promise<IApiResponse<IProjectDto>> => {
    const payload = { ...requestDto };

    return apiProvider.createRequest<ICreateNewProjectRequestDto, IProjectDto>({ url: '/projects' })
      .withData(payload)
      .withMethod(HttpMethod.POST)
      .sendAsync();
  };

  return ({
    getAllProjects,
    createNewProject,
  });
};
