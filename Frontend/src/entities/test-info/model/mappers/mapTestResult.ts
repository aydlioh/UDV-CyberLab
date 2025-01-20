import { TestResultDTO } from '../dto';
import { ITestResult, ITestResultItem } from '../types/ITestResult';

export const mapTestResult = (dto: TestResultDTO[]): ITestResult => ({
  testId: dto[0].testId,
  title: dto[0].test.name,
  totalAttempts: dto.length,
  attempts: dto.map(mapTestResultsItem),
});

const mapTestResultsItem = (dto: TestResultDTO): ITestResultItem => ({
  attempt: dto.attemptNumber,
  attemptId: dto.id,
  score: dto.scoredPoints,
  maxScore: dto.test.maxPoints,
});
