import { TestTitle, useTestPreview } from '@/entities/test-info';
import { QuestionsPreview } from '@/widgets/test-questions-preview';
import { useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const TestPreviewPage = () => {
  const { state } = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const redirectPath = useMemo(() => state?.from, []);
  const { testId = '', attemptId = '' } = useParams();
  const {
    data: { test, answers },
  } = useTestPreview({ testId, attemptId });

  const navigate = useNavigate();

  const handlePreviewFinish = () =>
    navigate(redirectPath || `/tests/${testId}/results/${attemptId}`);

  // TODO_1 Убрать
  const handlePreviewStart = () =>
    navigate(redirectPath || `/tests/${testId}/results`);

  return (
    <section className="w-full">
      <TestTitle title={test.name} />
      <QuestionsPreview
        answers={answers}
        id={test.id}
        questions={test.questions}
        totalQuestions={test.questions.length}
        handleStart={handlePreviewStart}
        handleFinish={handlePreviewFinish}
      />
    </section>
  );
};

export default TestPreviewPage;
