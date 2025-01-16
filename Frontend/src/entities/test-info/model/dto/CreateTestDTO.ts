export interface CreateTestDTO {
  name: string;
  description: string;
  theme: string;
  difficulty: string;
  attemptsCount: number;

  startTestTime: string;
  endTestTime: string;
  passTestTime?: string;

  maxPoints: number;
}
