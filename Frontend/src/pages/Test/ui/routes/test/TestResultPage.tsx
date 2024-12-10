import { testResultsMOCK } from '@/entities/test/MOCK/testResults';
import { ContentSwitcher } from '@/features/content-switcher';
import { TestAttemptTable } from '@/widgets/test-attempt-table';
import { Card } from '@nextui-org/react';
import { useNavigate, useParams } from 'react-router-dom';

const TestResultPage = () => {
  const navigate = useNavigate();
  const { resultId, testId } = useParams();

  if (!resultId) return null;

  const data = testResultsMOCK.attempts.filter(item => item.id === resultId)[0];

  return (
    <section className="max-w-[712px] w-full h-full flex flex-col gap-[12px]">
      <Card className="pt-[40px] pb-[24px] px-[32px]">
        <h2 className="text-[24px] pl-[20px] pb-3">
          {testResultsMOCK.title}
          <span className="text-second"> (Попытка: {data.attempt})</span>
        </h2>

        <TestAttemptTable result={data} />
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
