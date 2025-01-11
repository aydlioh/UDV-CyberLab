/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO_1 Использовать для Test Edit
export interface ITest {
  id: string;
  title: string;
  totalQuestions: number;
  leftTestTime?: string;

  // TODO_1 Разобраться и типизировать IQuestion
  questions: Array<any>;
}
