import { TestDTO } from '../dto';
import { ITest } from '../types/ITest';

export const mapTest = (dto: TestDTO): ITest => ({
  id: dto.id,
  title: dto.name,
  totalQuestions: dto.questions.length,
  leftTestTime: dto.leftTestTime,
  questions: dto.questions,
});
