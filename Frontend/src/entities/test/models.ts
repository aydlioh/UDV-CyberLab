export type AnswerType = string | string[] | File | null;

export type QuestionType =
  | 'radio'
  | 'checkbox'
  | 'select'
  | 'file'
  | 'text'
  | 'detailedText';

export interface ITitle {
  id: string;
  title: string;
  description?: string;
  difficulty: string;
  subject: string;
}

export interface IQuestion {
  id: string;
  question: string;
  description?: string;
  questionType: QuestionType;
  answers?: string[];
  required: boolean;
  correctAnswer: number;
}
