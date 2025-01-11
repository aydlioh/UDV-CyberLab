import { Questions } from '@/widgets/test-questions';
import { TestStatus } from '@/entities/test-passing';
import { testWithQuestionsMOCK } from '@/entities/test-passing/MOCK';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { TestExit } from '@/features/test-exit';
import { TestTitle } from '@/entities/test-info';

const TestPage = () => {
  const { testId } = useParams();

  const memoizedTestId = useMemo(() => testId, [testId]);

  if (!memoizedTestId) {
    return null;
  }

  const data = testWithQuestionsMOCK;

  return (
    <section className="w-full">
      <TestTitle title={data.title} />
      <Questions
        id={data.id}
        questions={data.questions}
        totalQuestions={data.totalQuestions}
        endContent={
          <div className="flex sm:flex-col sm:justify-start justify-between flex-row sm:gap-1 gap-2 mt-2">

            
            <TestStatus
              // TODO_1 вместо currentTime получать leftTime и переделать таймер относительно константного значения leftTime.
              // TODO_1 добавить логику заверешния теста когда таймер завершился. Наверное ее лучше вынести выше и не указывать в таймере. То есть где-то сверху (мб в этом компоненте) вызывать таймер завершения
              currentTime={(data.duration ?? 0) - (data.currentTime ?? 0)}

              // TODO_1 Брать общее количество из запроса, проверять процент отмеченного через useAnswers хук (переписать TestStatus компонент)
              totalQuestions={13}
              currentQuestions={6}
            />
            <TestExit id={data.id} />
          </div>
        }
      />
    </section>
  );
};

export default TestPage;
