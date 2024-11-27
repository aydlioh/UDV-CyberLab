import { IQuestion } from '@/shared/types';

export interface ITest {
  id: string;
  title: string;
  totalQuestions: number;
  duration?: number;
  currentTime?: number;

  questions: IQuestion[];
}
