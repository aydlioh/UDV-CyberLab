import { testsMOCK } from '@/entities/test-info/MOCK';
import { TestList } from '@/widgets/test-list';

const MyPassedTestsPage = () => {
  return (
    <section>
      <TestList
        tests={testsMOCK.filter(
          test => test.owner !== 'aydlioh' && test.status === 'over'
        )}
      />
    </section>
  );
};

export default MyPassedTestsPage;
