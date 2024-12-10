import { ITestResult } from './ITestResult';

export interface ITestAttempt {
  id: string;
  testId: string;
  title: string;
  totalAttempts: number;
  attempts: Array<ITestResult>;
};
