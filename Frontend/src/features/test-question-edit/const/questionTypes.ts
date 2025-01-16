import { QuestionType } from '@/shared/api/dto';

export const questionTypes: {
  key: QuestionType;
  label: string;
  isMulti?: boolean;
}[] = [
  { key: 'QuestionVariant', label: 'Один вариант' },
  { key: 'QuestionVariant', isMulti: true, label: 'Несколько вариантов' },
  { key: 'QuestionOpen', label: 'Открытый вопрос' },
  { key: 'QuestionCompliance', label: 'Соответствие' },
  { key: 'QuestionFile', label: 'Загрузить файл' },
];
