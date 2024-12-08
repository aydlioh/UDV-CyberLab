import { ITestResult } from './ITestResult';

export type ITestAttempt = {
  id: string;
  testId: string;
  title: string;
  totalAttempts: number;
  attempts: Array<ITestResult>;
};
