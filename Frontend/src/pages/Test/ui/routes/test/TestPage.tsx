import { Questions } from '@/widgets/test-questions';
import { TestStatus, TestTitle } from '@/entities/test';
import { testWithQuestionsMOCK } from '@/entities/test/MOCK';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { TestExit } from '@/features/test-exit';

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
              currentTime={(data.duration ?? 0) - (data.currentTime ?? 0)}
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
