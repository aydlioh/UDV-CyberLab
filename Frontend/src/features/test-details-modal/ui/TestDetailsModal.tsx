import { getTestStatus, TestDetails } from '@/entities/test-info';
import { useTestDetailsModalStore } from '../model/store';
import { Modal, ModalBody, ModalContent } from '@/shared/ui';
import { TestDetailsActions } from './actions/TestDetailsActions';
import { useAuth } from '@/entities/user';
import { testsMOCK } from '@/entities/test-info/MOCK';

export const TestDetailsModal = () => {
  const user = useAuth(state => state.user?.login);
  const { isOpen, setOpen, testId } = useTestDetailsModalStore();

  if (!isOpen) return null;

  const test = testsMOCK.find(test => test.id === testId);

  if (!test) return null;

  const testStatus = getTestStatus(
    { status: test.status, owner: test.owner },
    { user }
  );

  return (
    <Modal isOpen={isOpen} onOpenChange={setOpen} size="lg">
      <ModalContent>
        <ModalBody>
          <section className="w-full flex flex-col gap-[80px]">
            <TestDetails {...test} testStatus={testStatus} />
            <TestDetailsActions {...test} testStatus={testStatus} />
          </section>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
