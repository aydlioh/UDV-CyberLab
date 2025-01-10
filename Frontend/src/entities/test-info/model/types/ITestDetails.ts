export interface ITestDetails {
  id: string;
  owner: string;
  title: string;
  difficulty: string;
  subject: string;
  startDate: Date;
  endDate: Date;
  duration?: number;
  
  totalAttempts?: number;
  remainingAttempts?: number;

  totalPoints: number;
  currentPoints?: number;      
  
  status: 'idle' | 'run' | 'over';
}