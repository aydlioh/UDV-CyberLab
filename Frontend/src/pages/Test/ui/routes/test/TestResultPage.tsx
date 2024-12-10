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
      <Card className="pt-[40px] pb-[24px] px-[32px]">
        <div className='pl-[20px] pb-3'>
          <h2 className="text-[24px]">
            {testResultsMOCK.title}
          </h2>
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
