import { QuestionType } from '@/shared/types';
import { ITest } from '../model/dto/ITest';

export const testWithQuestionsMOCK: ITest = {
  id: '1',
  title: 'Тест по программированию на JavaScript',
  duration: 60 * 60 * 1000,
  totalQuestions: 15,
  currentTime: 32 * 1000,
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
    {
      id: '6',
      question: 'Какова разница между == и ===?',
      type: QuestionType.Text,
      saved: [],
    },
    {
      id: '7',
      question: 'Какова разница между var, let, const?',
      type: QuestionType.Text,
      saved: [],
    },
    {
      id: '8',
      question: 'Какова разница между null и undefined?',
      type: QuestionType.Radio,
      answers: [
        'null - это тип данных, undefined - это значение',
        'null - это значение, undefined - это тип данных',
        'null - это тип данных, undefined - это тип данных',
        'null - это значение, undefined - это значение',
      ],
      saved: [],
    },
    {
      id: '9',
      question:
        'Какова разница между == и ===? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: QuestionType.Checkbox,
      answers: [
        ' == - это строгий тип',
        ' === - это нестрогий тип',
        ' == - это нестрогий тип',
        ' === - это строгий тип',
      ],
      saved: [],
    },
    {
      id: '10',
      question: 'Какова разница между var, let, const?',
      type: QuestionType.Select,
      answers: [
        {
          title: 'var',
          items: ['var - это тип данных', 'var - это значение', 'var - это тип данных, но с кое-чем еще'],
        },
        {
          title: 'let',
          items: ['let - это тип данных', 'let - это значение', 'let - это тип данных, но с кое-чем еще'],
        },
        {
          title: 'const',
          items: ['const - это тип данных', 'const - это значение', 'const - это тип данных, но с кое-чем еще'],
        },
      ],
      saved: [],
    },
    {
      id: '11',
      question: 'Какова разница между null и undefined?',
      type: QuestionType.Radio,
      answers: [
        'null - это тип данных, undefined - это тип данных 1',
        'null - это тип данных, undefined - это тип данных 2 ',
        'null - это тип данных, undefined - это тип данных 3',
        'null - это тип данных, undefined - это тип данных 4',
      ],
      saved: [],
    },
    {
      id: '12',
      question:
        'Какова разница между == и ===? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: QuestionType.Checkbox,
      answers: [
        ' == - это тип данных 2',
        ' === - это тип данных 4',
        ' == - это тип данных 5',
        ' === - это тип данных 12',
      ],
      saved: [],
    },
    {
      id: '13',
      question: 'Какова разница между var, let, const? 232323',
      type: QuestionType.Select,
      answers: [
        {
          title: 'var 1',
          items: ['var - это тип данных 1', 'var - это тип данных 1wdwd', 'var - это тип данных, но с кое-чем еще 23'],
        },
        {
          title: 'let 2',
          items: ['let - это тип данных 232323', 'let - это тип данных 2323', 'let - это тип данных, но с кое-чем еще 2323 '],
        },
        {
          title: 'const 3',
          items: ['const - это тип данных 22323', 'const - это тип данных 2323', 'const - это тип данных, но с кое-чем еще23232323'],
        },
      ],
      saved: [],
    },
    {
      id: '14',
      question: 'Какова разница между null и undefined?',
      type: QuestionType.Text,
      saved: [],
    },
    {
      id: '15',
      question: 'Какова разница между == и ===?',
      type: QuestionType.Text,
      saved: [],
    }
  ],
};
