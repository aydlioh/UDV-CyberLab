import { ModalBody, ModalContent } from '@/shared/ui';
import { TestDetailsActions } from './actions/TestDetailsActions';
import { getTestStatus, TestDetails } from '@/entities/test-info';
import { testsMOCK } from '@/entities/test-info/MOCK';
import { useAuth } from '@/entities/user';
import { useTestDetailsModalStore } from '../model/store';

export const TestDetailsContent = () => {
  const user = useAuth(state => state.user?.userName);
  const testId = useTestDetailsModalStore(state => state.testId);

  const test = testsMOCK.find(test => test.id === testId);

  if (!test) return null;

  const testStatus = getTestStatus(
    { status: test.status, owner: test.owner },
    { user }
  );

  return (
    <ModalContent>
      <ModalBody>
        <section className="w-full flex flex-col gap-[80px]">
          <TestDetails {...test} testStatus={testStatus} />
          <TestDetailsActions {...test} testStatus={testStatus} />
        </section>
      </ModalBody>
    </ModalContent>
  );
};
