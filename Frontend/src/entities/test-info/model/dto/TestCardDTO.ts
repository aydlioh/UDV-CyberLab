export interface TestCardDTO {
  id: string;
  name: string;
  testId: string;
  ownerId: string;
  state: number;
  attemptNumber: number;
  leftAttemptsCount: number;
  scoredPoints: number;
  leftTestTime: string;
  isChecked: boolean;
}