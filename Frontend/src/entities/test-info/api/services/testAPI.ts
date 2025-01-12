import { axiosClient } from '@/shared/api';
import {
  TestCardDTO,
  CreateTestDTO,
  UpdateTestDTO,
  TestDetailsDTO,
  TestDTO,
  UpdateTestTitleDTO,
  UpdateTestSettingsDTO,
} from '../../model/dto';
import { ITest, ITestCard, ITestDetails } from '../../model/types';
import { mapTest, mapTestCard, mapTestDetails } from '../../model/mappers';

type UpdateTestType = {
  id: string;
  body: UpdateTestDTO;
};

type UpdateTestTitleType = {
  id: string;
  body: UpdateTestTitleDTO;
};

type UpdateTestSettingsType = {
  id: string;
  body: UpdateTestSettingsDTO;
};

class TestApi {
  public async getTestDetailsById(id: string): Promise<ITestDetails> {
    const response = await axiosClient.get<TestDetailsDTO>(
      `/api/Test/${id}/short`
    );
    return mapTestDetails(response);
  }

  public async deleteTestById(id: string): Promise<void> {
    await axiosClient.delete(`/api/Test/${id}`);
  }

  public async createTest(body: CreateTestDTO): Promise<string> {
    return await axiosClient.post('/api/Test', body);
  }

  public async updateTestById({ id, body }: UpdateTestType): Promise<string> {
    return await axiosClient.put(`/api/Test/${id}`, body);
  }

  public async updateTestTitleById({
    id,
    body,
  }: UpdateTestTitleType): Promise<string> {
    return await axiosClient.put(`/api/Test/${id}`, body);
  }

  public async updateTestSettingsById({
    id,
    body,
  }: UpdateTestSettingsType): Promise<string> {
    return await axiosClient.put(`/api/Test/${id}`, body);
  }

  public async getTestById(id: string): Promise<ITest> {
    const response = await axiosClient.get<TestDTO>(`/api/Test/${id}`);
    return mapTest(response);
  }

  public async getTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test');
    return response.map(mapTestCard);
  }

  public async getMyTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test/my');
    return response.map(mapTestCard);
  }

  public async getPassedTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test/passed');
    return response.map(mapTestCard);
  }

  public async getCreatedTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test/created');
    return response.map(mapTestCard);
  }
}

export const testApi = new TestApi();
