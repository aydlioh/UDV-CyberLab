import { QuestionType } from './types';

export interface IQuestion {
  id: string;
  question: string;
  description?: string;
  questionType: QuestionType;
  answers?: string[];
  required: boolean;
  correctAnswer: number;
}
