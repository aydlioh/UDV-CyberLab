import { TestTitle, useTestResults } from '@/entities/test-info';
import { useAnswers } from '@/entities/test-passing';
import { BackButton, Card, Spinner } from '@/shared/ui';
import { TestResultChart } from '@/widgets/test-result-chart';
import { TestResultTable } from '@/widgets/test-result-table';
import { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const TestResultListPage = () => {
  const { testId: id = '' } = useParams();
  const { data, isFetching } = useTestResults(id);
  const reset = useAnswers(state => state.reset);

  const sortedData = useMemo(
    () => ({
      ...data,
      attempts: data.attempts.sort((a, b) => a.attempt - b.attempt),
    }),
    [data]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  if (isFetching)
    return (
      <div className="flex justify-center items-center w-full">
        <Spinner size="page" color="primary" />
      </div>
    );

  if (sortedData.totalAttempts === 1) {
    return (
      <Navigate
        replace
        to={`/tests/${sortedData.testId}/results/${sortedData.attempts[0].attemptId}`}
      />
    );
  }

  return (
    <div className="flex flex-col gap-1.5 w-full h-full items-start max-w-[712px] ">
      <BackButton label="Назад к тестам" to="/tests/my" />
      <Card className="w-full h-full pt-[40px] pb-[24px] sm:px-[32px] px-[15px] mb-3">
        <div>
          <TestTitle title={sortedData.title} className="px-[15px]" />
          <TestResultChart results={sortedData} />
          <TestResultTable results={sortedData} />
        </div>
      </Card>
    </div>
  );
};

export default TestResultListPage;
