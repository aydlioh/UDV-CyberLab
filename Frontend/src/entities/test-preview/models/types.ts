export type AnswerType = string | string[] | File | null;

export type QuestionType =
  | 'radio'
  | 'checkbox'
  | 'select'
  | 'file'
  | 'text'
  | 'detailedText';