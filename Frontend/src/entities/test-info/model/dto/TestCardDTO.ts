export interface TestCardDTO {
  id: string;
  test: string;
  testId: string;
  userId: string;
  state: number;
  attemptNumber: number;
  leftAttemptsCount: number;
  scoredPoints: number;
  leftTestTime: string;
  isChecked: boolean;
}