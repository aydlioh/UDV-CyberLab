import { QuestionCard, TitleCard } from '@/entities/test';
import { IQuestion } from '@/entities/test/models';

const titleMock = {
  id: '1',
  title: 'Заголовок теста',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum libero veniam velit odio deserunt distinctio eum illo dignissimos',
  difficulty: 'Легкий',
  subject: 'Математика',
};

const questionsMock: IQuestion[] = [
  {
    id: '1',
    question: 'Краткий текстовый вопрос',
    correctAnswer: 1,
    required: false,
    questionType: 'text',
  },
  {
    id: '2',
    question: 'Развернутый текстовый вопрос',
    correctAnswer: 1,
    required: true,
    questionType: 'detailedText',
  },
  {
    id: '3',
    question: 'Вопрос с выбором одного ответа',
    answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
    correctAnswer: 1,
    required: true,
    questionType: 'radio',
  },
  {
    id: '4',
    question: 'Вопрос с выбором нескольких ответов',
    answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
    correctAnswer: 1,
    required: true,
    questionType: 'checkbox',
  },
  {
    id: '5',
    question: 'Вопрос с выбором из списка',
    answers: [
      'Ответ 1',
      'Ответ 2',
      'Ответ 3',
      'Ответ 4',
      'Ответ 5',
      'Ответ 6',
      'Ответ 7',
      'Ответ 8',
      'Ответ 9',
      'Ответ 10',
      'Ответ 11',
    ],
    correctAnswer: 1,
    required: false,
    questionType: 'select',
  },
  {
    id: '6',
    question: 'Вопрос с загружаемым файлом',
    correctAnswer: 1,
    required: false,
    questionType: 'file',
  },
];

export const TestPage = () => {
  return (
    <section className="min-h-svh w-full px-2">
      <div className="max-w-[640px] mx-auto flex flex-col my-[100px] gap-4">
        <TitleCard {...titleMock} />
        {questionsMock.map((question, index) => (
          <QuestionCard
            currentIndex={index + 1}
            totalCount={questionsMock.length}
            key={question.id}
            {...question}
          />
        ))}
      </div>
    </section>
  );
};
