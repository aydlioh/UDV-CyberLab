import { TestTitle, useTestResults } from '@/entities/test-info';
import { useAnswers } from '@/entities/test-passing';
import { BackButton, Card } from '@/shared/ui';
import { TestResultChart } from '@/widgets/test-result-chart';
import { TestResultTable } from '@/widgets/test-result-table';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const TestResultListPage = () => {
  const { testId: id = '' } = useParams();
  const { data } = useTestResults(id);
  const reset = useAnswers(state => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  if (data.totalAttempts === 1) {
    return (
      <Navigate
        to={`/tests/${data.testId}/results/${data.attempts[0].attemptId}`}
      />
    );
  }

  return (
    <div className="flex flex-col gap-1.5 w-full h-full items-start max-w-[712px] ">
      <BackButton label="Назад к тестам" to="/tests/my" />
      <Card className="w-full h-full pt-[40px] pb-[24px] sm:px-[32px] px-[15px] mb-3">
        <div>
          <TestTitle title={data.title} className="px-[15px]" />
          <TestResultChart results={data} />
          <TestResultTable results={data} />
        </div>
      </Card>
    </div>
  );
};

export default TestResultListPage;
