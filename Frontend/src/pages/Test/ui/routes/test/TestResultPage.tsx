import { TestTitle } from '@/entities/test';
import { testResultsMOCK } from '@/entities/test/MOCK/testResults';
import { ContentSwitcher } from '@/features/content-switcher';
import { TestAttemptTable } from '@/widgets/test-attempt-table';
import { Card } from '@nextui-org/react';
import { useNavigate, useParams } from 'react-router-dom';

const TestResultPage = () => {
  const navigate = useNavigate();
  const { resultId, testId } = useParams();

  if (!resultId || !testId) return null;

  const data = testResultsMOCK.attempts.filter(item => item.id === resultId)[0];

  return (
    <section className="max-w-[712px] w-full h-full flex flex-col gap-[12px]">
      <Card className="sm:pt-[40px] pt-[20px] sm:pb-[24px] pb-[20px] sm:px-[32px] px-2">
        <div className='pl-[20px] pb-3'>
          <TestTitle title={testResultsMOCK.title} />

          <p className="text-second text-[18px]">Попытка: {data.attempt}</p>
        </div>

        <TestAttemptTable result={data} testId={testId} />
      </Card>
      <ContentSwitcher
        nextLabel="Подробнее"
        isPrev={testResultsMOCK.totalAttempts > 1}
        handlePrev={() => navigate(`/tests/${testId}/results`)}
        handleNext={() =>
          navigate(`/tests/${testId}/results/${resultId}/preview`)
        }
      />
    </section>
  );
};

export default TestResultPage;
