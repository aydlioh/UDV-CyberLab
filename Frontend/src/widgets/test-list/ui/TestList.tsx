import { ITestCard, TestCard } from '@/entities/test-info';
import { TestCardTools } from '@/features/test-card-tools';
import {
  TestDetailsModal,
  useTestDetailsModalStore,
} from '@/features/test-details-modal';

export const TestList = ({ tests }: { tests: ITestCard[] }) => {
  const open = useTestDetailsModalStore(state => state.open);

  return (
    <>
      <ul className="flex flex-col gap-2 mb-10">
        {tests.map(test => (
          <TestCard
            onClick={() => open(test.id)}
            key={test.id}
            test={test}
            rightContent={<TestCardTools test={test} />}
          />
        ))}
      </ul>
      <TestDetailsModal />
    </>
  );
};
