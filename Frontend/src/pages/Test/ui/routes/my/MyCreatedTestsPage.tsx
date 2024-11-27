import { testsMOCK } from '@/entities/test-info/MOCK';
import { TestList } from '@/widgets/test-list';

const MyCreatedTestsPage = () => {
  return (
    <section>
      <TestList
        tests={testsMOCK.filter(
          test => test.owner === 'aydlioh'
        )}
      />
    </section>
  );
};

export default MyCreatedTestsPage;
