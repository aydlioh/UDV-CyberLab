import { QuestionDTO } from '@/shared/api/dto';
import { SavedAnswerWithKey } from '../dto';

export interface ITestPassing {
  testId: string;
  userTestId: string;
  title: string;
  totalQuestions: number;
  leftTestTime?: string;
  questions: QuestionDTO[];
  savedAnswers: SavedAnswerWithKey[];
}
