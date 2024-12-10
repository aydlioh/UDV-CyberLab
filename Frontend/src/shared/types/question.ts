export type QuestionAnswersType = string | { title: string; items: string[] };

export enum QuestionType {
  Radio = 'radio',
  Checkbox = 'checkbox',
  Select = 'select',
  File = 'file',
  Text = 'text',
}

export interface IQuestion {
  id: string;
  question: string;
  answers?: QuestionAnswersType[];
  type: QuestionType;
}