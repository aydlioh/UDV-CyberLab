import { QuestionEditCard, QuestionEditType } from '@/features/question-edit';
import { QuestionType } from '@/shared/types';
import { Button } from '@/shared/ui';
import { useCallback, useState } from 'react';
import { IoAdd } from 'react-icons/io5';

const questiosMOCK: QuestionEditType[] = [
  {
    id: '1',
    maxScore: 2,
    question: 'Какова основная задача JavaScript?',
    type: QuestionType.Radio,
    correctAnswers: 'Выполнение задачи на стороне клиента',
    answers: [
      'Выполнение задачи на стороне клиента',
      'Выполнение задачи на стороне сервера',
      'Выполнение задачи на стороне базы данных',
    ],
  },
  {
    id: '2',
    maxScore: 2,
    question:
      'Взломайте пентагон, в качестве доказательства прикрепите скриншот',
    type: QuestionType.File,
  },
  {
    id: '3',
    maxScore: 3,
    question: 'Какова разница между var, let, const?',
    type: QuestionType.Select,
    correctAnswers: [
      {
        title: 'var',
        item: 'var - это значение',
      },
      {
        title: 'let',
        item: 'let - это тип данных',
      },
      {
        title: 'const',
        item: 'const - это тип данных, но с кое-чем еще',
      },
    ],
    answers: [
      {
        title: 'var',
        items: [
          'var - это значение',
          'var - это тип данных',
          'var - это тип данных, но с кое-чем еще',
        ],
      },
      {
        title: 'let',
        items: [
          'let - это тип данных',
          'let - это значение',
          'let - это тип данных, но с кое-чем еще',
        ],
      },
      {
        title: 'const',
        items: [
          'const - это значение',
          'const - это тип данных',
          'const - это тип данных, но с кое-чем еще',
        ],
      },
    ],
  },
  {
    id: '4',
    maxScore: 1,
    question: 'Какова разница между null и undefined?',
    type: QuestionType.Text,
    correctAnswers: ['Откуда мне знать?', 'Эээ ну...', 'Да'],
  },
  {
    id: '5',
    maxScore: 1,
    question: 'Какие типы данных есть в JavaScript?',
    correctAnswers: [
      'String',
      'Number',
      'Boolean',
      'Null',
      'Undefined',
      'Object',
      'Array',
      'Function',
    ],
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
  },
];

export const TestEditList = () => {
  const [editList, setEditList] = useState<QuestionEditType[]>(questiosMOCK);

  const handleAddQuestion = useCallback(
    () => setEditList(prev => [...prev, { id: crypto.randomUUID() }]),
    [setEditList]
  );

  return (
    <div>
      <ul className="flex flex-col gap-3 mb-2">
        {editList.map((question, index) => (
          <li key={question.id}>
            <QuestionEditCard
              setQuestion={setEditList}
              index={index + 1}
              question={question}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button
          onPress={handleAddQuestion}
          variant="light"
          size="md"
          radius="md"
          className="w-[120px]"
          isIconOnly
        >
          <IoAdd size={28} />
        </Button>
      </div>
    </div>
  );
};
