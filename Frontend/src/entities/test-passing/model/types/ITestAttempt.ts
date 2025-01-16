export interface ITestAttempt {
  id: string;
  attempt: number;
  maxScore: number;
  score: number;
  results: ITestAttemptItem[];
}

export interface ITestAttemptItem {
  id: string;
  number: number;
  maxScore: number;
  score: number;
}

