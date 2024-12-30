import { TestTitle } from '@/entities/test';
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
    <Card className="max-w-[712px] w-full h-full pt-[40px] pb-[24px] sm:px-[32px] px-[15px] mb-3">
      <div>
        <TestTitle title={data.title} className='px-[15px]' />
        <TestResultChart results={data} />
        <TestResultTable results={data} />
      </div>
    </Card>
  );
};

export default TestResultListPage;
