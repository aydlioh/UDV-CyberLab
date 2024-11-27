import { QuestionType } from '@/shared/types';
import { ITest } from '../model/dto/ITest';

export const testWithQuestionsMOCK: ITest = {
  id: '1',
  title: 'Тест по программированию на JavaScript',
  duration: 3600000, // 1 hour in milliseconds
  totalQuestions: 5,
  currentTime: 0,
  questions: [
    {
      id: '1',
      question: 'Какова основная задача JavaScript?',
      type: QuestionType.Radio,
      answers: [
        'Выполнение задачи на стороне клиента',
        'Выполнение задачи на стороне сервера',
        'Выполнение задачи на стороне базы данных',
      ],
      saved: [],
    },
    {
      id: '2',
      question: 'Какие типы данных есть в JavaScript?',
      type: QuestionType.Checkbox,
      answers: [
        'String',
        'Number',
        'Boolean',
        'Null',
        'Undefined',
        'Object',
        'Array',
        'Function',
      ],
      saved: [],
    },
    {
      id: '3',
      question:
        'Взломайте пентагон, в качестве доказательства прикрепите скриншот',
      type: QuestionType.File,
      saved: [],
    },
    {
      id: '4',
      question:
        'Играешь в игры? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum blanditiis nam beatae. Amet, repellendus. Obcaecati, fugit, non aut cupiditate modi, necessitatibus corporis dolorem saepe possimus unde nostrum veniam hic dolorum.',
      type: QuestionType.Select,
      answers: [
        {
          title: 'Сколько ММР в доте?',
          items: ['1000', '2500', '4000', '5500', '14000'],
        },
        {
          title: 'Какой ранг в КСГО?',
          items: [
            'Сильвер',
            'Звезда',
            'Калаш',
            'Беркут',
            'Дракон',
            'Суприм',
            'Генерал',
          ],
        },
        {
          title: 'Сколько?',
          items: ['2', '4', '6'],
        },
      ],
      saved: [],
    },
    {
      id: '5',
      question: 'Какова разница между null и undefined?',
      type: QuestionType.Text,
      saved: [],
    },
  ],
};
