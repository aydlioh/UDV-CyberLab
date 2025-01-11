import { axiosClient } from '@/shared/api';
import {
  TestCardDTO,
  CreateTestDTO,
  UpdateTestDTO,
  TestDetailsDTO,
} from '../../model/dto';
import { ITestCard, ITestDetails } from '../../model/types';
import { mapTestCard, mapTestDetails } from '../../model/mappers';

type UpdateTestType = {
  id: string;
  body: UpdateTestDTO;
};

class TestApi {
  public async getTestDetails(id: string): Promise<ITestDetails> {
    const response = await axiosClient.get<TestDetailsDTO>(
      `/api/Test/${id}/short`
    );
    return mapTestDetails(response);
  }

  public async deleteTest(id: string): Promise<void> {
    await axiosClient.delete(`/api/Test/${id}`);
  }

  public async createTest(body: CreateTestDTO): Promise<string> {
    return await axiosClient.post('/api/Test', body);
  }

  public async updateTest({ id, body }: UpdateTestType): Promise<string> {
    return await axiosClient.put(`/api/Test/${id}`, body);
  }

  // TODO_1 типизация
  public async getTestById(id: string): Promise<ITestCard> {
    const response = await axiosClient.get<TestCardDTO>(`/api/Test/${id}`);
    return mapTestCard(response);
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
