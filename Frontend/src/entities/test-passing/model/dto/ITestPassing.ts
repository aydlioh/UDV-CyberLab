import { IQuestion } from '@/shared/types';

export interface ITestPassing {
  id: string;
  title: string;
  totalQuestions: number;
  duration?: number;
  currentTime?: number;

  questions: IQuestion[];
}
