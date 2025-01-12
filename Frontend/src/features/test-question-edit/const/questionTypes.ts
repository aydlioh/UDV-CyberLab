import { QuestionType } from '@/shared/types';

export const questionTypes = [
  { key: QuestionType.Radio, label: 'Один вариант' },
  { key: QuestionType.Checkbox, label: 'Несколько вариантов' },
  { key: QuestionType.Text, label: 'Открытый вопрос' },
  // TODO_1 вернуть
  // { key: QuestionType.Select, label: 'Соответствие' },
  { key: QuestionType.File, label: 'Загрузить файл' },
];
