import { TestTitle } from '@/entities/test';
import { testResultsMOCK } from '@/entities/test/MOCK/testResults';
import { BackButton, Card } from '@/shared/ui';
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
    <div className='flex flex-col gap-1.5 w-full h-full items-start max-w-[712px] '>
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
