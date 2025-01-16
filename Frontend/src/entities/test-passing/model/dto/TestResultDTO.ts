export interface TestResultDTO {
  id: string;
  testId: string;
  userId: string;
  state: 0 | 1 | 2;
  attemptNumber: number;
  leftAttemptsCount: number;
  scoredPoints: number;
  leftTestTime: string;
  isChecked: boolean;
  test: {
    name: string;
    theme: string;
    description: string;
    ownerId: string;
    difficulty: string;
    attemptsCount: number;
    startTestTime: string;
    endTestTime: string;
    maxPoints: number;
    questionsCount: number;
    id: string;
  };
}


