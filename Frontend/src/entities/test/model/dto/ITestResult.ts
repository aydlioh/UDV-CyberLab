export type ITestResult = {
  id: string;
  attempt: number;
  maxScore: number;
  score: number;
  results: Array<{
    id: string;
    number: number;
    maxScore: number;
    score: number;
  }>;
};
