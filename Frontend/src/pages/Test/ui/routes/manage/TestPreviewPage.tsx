import { TestTitle } from '@/entities/test';
import { testWithQuestionsMOCK } from '@/entities/test/MOCK';
import { QuestionsPreview } from '@/widgets/test-questions-preview';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TestPreviewPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  const handleFinishClick = () => navigate('/tests/my/created');
  const handleStartClick = () => navigate(`/tests/manage/${testId}/settings`);

  const memoizedTestId = useMemo(() => testId, [testId]);

  if (!memoizedTestId) {
    return null;
  }

  const data = testWithQuestionsMOCK;

  return (
    <section className="w-full">
      <TestTitle title={data.title} />
      <QuestionsPreview
        isPreview
        id={data.id}
        questions={data.questions}
        totalQuestions={data.totalQuestions}
        handleFinish={handleFinishClick}
        handleStart={handleStartClick}
      />
    </section>
  );
};

export default TestPreviewPage;
