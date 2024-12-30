import { TestTitle } from '@/entities/test';
import { testStatisticsMOCK } from '@/entities/test/MOCK/testStatistics';
import { Card } from '@/shared/ui';
import { TestStatisticsTable } from '@/widgets/test-statistics-table';
import { useParams } from 'react-router-dom';

const TestStatisticsPage = () => {
  const { testId } = useParams();

  if (!testId) return null;

  return (
    <section className="max-w-[712px] w-full h-full flex flex-col gap-[12px] mb-3">
      <Card className="sm:pt-[40px] sm:pb-[24px] pt-[20px] pb-[20px] sm:px-[32px] px-1">
        <TestTitle title={testStatisticsMOCK.title} className='px-[20px] pb-3' />
        <TestStatisticsTable results={testStatisticsMOCK} />
      </Card>
    </section>
  );
};

export default TestStatisticsPage;
