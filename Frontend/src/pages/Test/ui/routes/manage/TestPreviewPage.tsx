import { TestTitle } from '@/entities/test';
import { testWithQuestionsMOCK } from '@/entities/test/MOCK';
import { Questions } from '@/widgets/test-questions';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const TestPreviewPage = () => {
  const { testId } = useParams();

  useEffect(() => {}, []);
  const memoizedTestId = useMemo(() => testId, [testId]);

  if (!memoizedTestId) {
    return null;
  }

  const data = testWithQuestionsMOCK;

  return (
    <section className="w-full">
      <TestTitle title={data.title} />
      <Questions
        isPreview
        id={data.id}
        questions={data.questions}
        totalQuestions={data.totalQuestions}
      />
    </section>
  );
};

export default TestPreviewPage;
