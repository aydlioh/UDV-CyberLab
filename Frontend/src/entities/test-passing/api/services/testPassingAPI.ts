/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from '@/shared/api';

type SaveAnswerType = {
  id: string;
  // TODO_1 типизация
  body: any;
};

class TestPassingApi {
  // TODO_1 типизация
  public async getSavedAnswers(id: string): Promise<any> {
    return await axiosClient.get(`/api/TestPassing/${id}/answers`);
  }

  public async startTest(id: string): Promise<void> {
    return await axiosClient.post(`/api/TestPassing/${id}/start`, {});
  }

  public async saveAnswer({ id, body }: SaveAnswerType): Promise<void> {
    return await axiosClient.post(`/api/TestPassing/${id}/answer`, body);
  }

  public async finishTest(id: string): Promise<void> {
    return await axiosClient.post(`/api/TestPassing/${id}/finish`, {});
  }
}

export const testPassingApi = new TestPassingApi();
