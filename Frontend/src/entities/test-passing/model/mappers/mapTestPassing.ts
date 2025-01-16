import { TestDTO } from '@/shared/api/dto';
import { ITestPassing } from '../types';
import { SavedAnswerWithKey } from '../dto';

export const mapTestPassing = (dto: {
  testInfo: TestDTO;
  answers: SavedAnswerWithKey[];
  leftTestTime: string;
  userTestId: string;
}): ITestPassing => ({
  testId: dto.testInfo.id,
  userTestId: dto.userTestId,
  title: dto.testInfo.name,
  totalQuestions: dto.testInfo.questions.length,
  questions: dto.testInfo.questions,
  leftTestTime: dto.leftTestTime,
  savedAnswers: dto.answers,
});
