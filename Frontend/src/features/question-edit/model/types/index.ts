import { QuestionAnswersType, QuestionType } from '@/shared/types';

export type SelectActionType = { title: string; items: string[] };
export type SelectActionCorrectType = { title: string; item: string };

export type QuestionEditType = {
  id: string;
  question?: string;
  correctAnswers?:
    | QuestionAnswersType[]
    | SelectActionCorrectType[]
    | string
  maxScore?: number;
  answers?: QuestionAnswersType[];
  type?: QuestionType;
};
