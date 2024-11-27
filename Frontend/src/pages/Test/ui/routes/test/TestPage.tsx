import { Questions } from '@/widgets/questions';
import { TestTitle } from '@/entities/test';
import { testWithQuestionsMOCK } from '@/entities/test/MOCK';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

const TestPage = () => {
  const { testId } = useParams();

  const memoizedTestId = useMemo(() => testId, [testId]);

  if (!memoizedTestId) {
    return null;
  }

  const data = testWithQuestionsMOCK;

  return (
    <section className="w-full max-w-[712px]">
      <div>
        <TestTitle title={data.title} />
        <Questions
          id={data.id}
          questions={data.questions}
          totalQuestions={data.totalQuestions}
        />
      </div>
    </section>
  );
};

export default TestPage;
