export interface ITestStatistics {
  testId: string;
  title: string;
  totalСompleted: number;
  maxScore: number;
  users: Array<{
    id: string;
    name: string;
    score: number;
  }>;
}
