import { TestDTO } from '@/shared/api/dto';

export interface TestResultDTO {
  testId: string;
  userId: string;
  id: string;
  scoredPoints: number;
  test: TestDTO;
}
