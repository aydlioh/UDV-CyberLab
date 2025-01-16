import { axiosClient } from '@/shared/api';
import { ITestPassing } from '../../model/types/ITestPassing';
import { SavedAnswersDTO, UserTestDTO } from '../../model/dto';
import { TestDTO } from '@/shared/api/dto';
import { mapTestPassing } from '../../model/mappers';

type SaveAnswerType = {
  id: string;
  body: SavedAnswersDTO;
};

class TestPassingApi {
  public async getSavedAnswers(id: string): Promise<SavedAnswersDTO> {
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

  public async getPassingTestById(id: string): Promise<ITestPassing | null> {
    // TODO_1 Разделить запросы
    try {
      const test = await axiosClient.get<TestDTO>(`/api/Test/${id}`);
      const answers = await this.getSavedAnswers(id);
      const userTest = await axiosClient.get<UserTestDTO>(
        `/api/Test/userTest/${answers.userTestId}`
      );

      const savedAnswers = [
        ...answers.openAnswers,
        ...answers.variantAnswers,
        ...answers.complianceAnswers,
        ...answers.fileAnswers,
      ];

      return mapTestPassing({
        testInfo: test,
        answers: test.questions.map(question => ({
          id: question.id,
          data:
            savedAnswers.find(answer => answer.questionId === question.id) ||
            null,
        })),
        userTestId: answers.userTestId,
        leftTestTime: userTest.leftTestTime,
      });
    } catch (e) {
      const error = e as Error & { status: number };
      if (error.status === 404 || error.status === 500) return null;
      return null;
    }
  }
}

export const testPassingApi = new TestPassingApi();
