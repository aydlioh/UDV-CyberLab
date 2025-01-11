export interface TestDTO {
  id: string;
  name: string;
  description: string;
  theme: string;
  difficulty: string;
  ownerId: string;
  attemptsCount: number;
  startTestTime: string;
  endTestTime: string;
  leftTestTime: string;
  maxPoints: number;
  questions: Array<unknown>;
}
