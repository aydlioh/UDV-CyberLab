import { TestResultDTO } from '../dto';
import { ITestResult, ITestResultItem } from '../types/ITestResult';

export const mapTestResult = (dto: TestResultDTO[]): ITestResult => ({
  testId: dto[0].testId,
  title: dto[0].test.name,
  totalAttempts: dto.length,
  attempts: dto.map((d, index) => mapTestResultsItem(d, index)),
});

const mapTestResultsItem = (
  dto: TestResultDTO,
  index: number
): ITestResultItem => ({
  attempt: index + 1,
  attemptId: dto.id,
  score: dto.scoredPoints,
  maxScore: dto.test.maxPoints,
});
