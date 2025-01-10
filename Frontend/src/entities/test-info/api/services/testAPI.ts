import { axiosClient } from '@/shared/api';
import { ITestCard } from '../../model/types/ITestCard';
import { mapTestCardDTO } from '../../model/mappers/mapTestCardDTO';
import { TestCardDTO } from '../../model/dto/TestCardDTO';
import { ITestDetails } from '../../model/types/ITestDetails';

class TestApi {
  public async getTestDetails(id: string): Promise<ITestDetails> {
    const response = await axiosClient.get<ITestDetails>(
      `/api/Test/${id}/short`
    );
    return response;
  }

  public async deleteTest(id: string): Promise<void> {
    await axiosClient.delete(`/api/Test/${id}`);
  }

  // TODO_1 Типизировать тело запроса и тело ответа
  public async createTest(body: string): Promise<void> {
    await axiosClient.post('/api/Test', body);
  }

  public async getTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test');
    return response.map(mapTestCardDTO);
  }

  public async getMyTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test/my');
    return response.map(mapTestCardDTO);
  }

  public async getPassedTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test/passed');
    return response.map(mapTestCardDTO);
  }

  public async getCreatedTests(): Promise<ITestCard[]> {
    const response = await axiosClient.get<TestCardDTO[]>('/api/Test/created');
    return response.map(mapTestCardDTO);
  }
}

export const testApi = new TestApi();
