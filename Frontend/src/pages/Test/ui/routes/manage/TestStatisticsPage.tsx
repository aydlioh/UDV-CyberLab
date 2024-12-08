import { testStatisticsMOCK } from '@/entities/test/MOCK/testStatistics';
import { Card } from '@/shared/ui';
import { TestStatisticsTable } from '@/widgets/test-statistics-table';
import { useParams } from 'react-router-dom';

const TestStatisticsPage = () => {
  const { testId } = useParams();

  if (!testId) return null;

  return (
    <section className="max-w-[712px] w-full h-full flex flex-col gap-[12px]">
      <Card className="pt-[40px] pb-[24px] px-[32px]">
        <h2 className="text-[24px] pl-[20px] pb-3">
          {testStatisticsMOCK.title}
        </h2>

        <TestStatisticsTable results={testStatisticsMOCK} />
      </Card>
    </section>
  );
};

export default TestStatisticsPage;
