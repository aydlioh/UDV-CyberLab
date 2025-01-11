export interface ITestDetails {
  id: string;
  owner: string;
  title: string;
  difficulty: string;
  subject: string;
  startDate: Date | string;
  endDate: Date | string;
  duration?: number;

  leftAttempts?: number;

  totalPoints: number;
  currentPoints?: number;

  status: 'idle' | 'run' | 'over';
}
