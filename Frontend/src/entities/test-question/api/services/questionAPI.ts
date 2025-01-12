/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from '@/shared/api';

type UpdateQuestionType = {
  id: string;
  // TODO_1 типизировать
  body: any;
};

class QuestionApi {
  // TODO_1 типизировать
  public async getQuestionById(id: string): Promise<any> {
    return await axiosClient.get(`/api/Questions/${id}`);
  }

  public async updateQuestionById({
    id,
    body,
  }: UpdateQuestionType): Promise<void> {
    return await axiosClient.put(`/api/Questions/${id}`, body);
  }

  public async deleteQuestionById(id: string): Promise<void> {
    return await axiosClient.delete(`/api/Questions/${id}`);
  }

  // TODO_1 типизировать
  public async createComplianceQuestion(body: any): Promise<void> {
    return await axiosClient.post('/api/Questions/compliance', body);
  }

  // TODO_1 типизировать
  public async createFileQuestion(body: any): Promise<void> {
    return await axiosClient.post('/api/Questions/file', body);
  }

  // TODO_1 типизировать
  public async createTextQuestion(body: any): Promise<void> {
    return await axiosClient.post('/api/Questions/open', body);
  }

  // TODO_1 типизировать
  public async createVariantQuestion(body: any): Promise<void> {
    return await axiosClient.post('/api/Questions/variant', body);
  }
}

export const questionApi = new QuestionApi();
