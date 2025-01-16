import { TestResultDTO } from '../dto/TestResultDTO';
import {
  ITestResult,
  ITestResultItem,
} from '../../../test-info/model/types/ITestResult';

export const mapTestResult = (dto: TestResultDTO[]): ITestResult => ({
  title: dto[0].test.name,
  testId: dto[0].testId,
  totalAttempts: dto.length,
  attempts: dto.map(mapTestResultAttempt),
});

const mapTestResultAttempt = (dto: TestResultDTO): ITestResultItem => ({
  attemptId: dto.id,
  attempt: dto.attemptNumber,
  maxScore: dto.test.maxPoints,
  score: dto.scoredPoints,
});
