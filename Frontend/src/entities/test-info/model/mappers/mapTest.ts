import { TestDTO } from '../dto';
import { ITestW } from '../types/ITest';

export const mapTest = (dto: TestDTO): ITestW => ({
  id: dto.id,
  title: dto.name,
  totalQuestions: dto.questions.length,
  leftTestTime: dto.leftTestTime,
  questions: dto.questions,
});
