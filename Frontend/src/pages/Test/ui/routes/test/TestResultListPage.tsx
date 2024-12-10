import { testResultsMOCK } from '@/entities/test/MOCK/testResults';
import { Card } from '@/shared/ui';
import { TestResultChart } from '@/widgets/test-result-chart';
import { TestResultTable } from '@/widgets/test-result-table';
import { Navigate, useParams } from 'react-router-dom';

const TestResultListPage = () => {
  const { testId } = useParams();

  if (!testId) return null;

  const data = testResultsMOCK;

  if (data.totalAttempts === 1) {
    return <Navigate to={`/tests/${testId}/results/${data.attempts[0].id}`} />;
  }

  return (
    <Card className="max-w-[712px] w-full h-full pt-[40px] pb-[24px] px-[32px] mb-3">
      <div>
        <h2 className="text-[24px] pl-[20px]">{data.title}</h2>
        <TestResultChart results={data} />
        <TestResultTable results={data} />
      </div>
    </Card>
  );
};

export default TestResultListPage;
