import { testsMOCK } from '@/entities/test/MOCK';
import { TestList } from '@/widgets/test-list';

const MyTestsPage = () => {
  return (
    <section>
      <TestList
        tests={testsMOCK.filter(
          test => test.owner !== 'aydlioh' && test.status !== 'over'
        )}
      />
    </section>
  );
};

export default MyTestsPage;
