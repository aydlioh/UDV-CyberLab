import { ModalBody, ModalContent, ModalSpinner } from '@/shared/ui';
import { TestDetailsActions } from './actions/TestDetailsActions';
import {
  getTestStatus,
  TestDetails,
  useTestDetails,
} from '@/entities/test-info';
import { useAuth } from '@/entities/user';
import { useTestDetailsModalStore } from '../model/store';

export const TestDetailsContent = () => {
  const testId = useTestDetailsModalStore(state => state.testId);
  const userId = useAuth(state => state.user?.userId);
  const { data, isLoading, error } = useTestDetails(testId ?? '');

  if (error || !testId) return null;

  if (!data || isLoading) {
    return (
      <ModalContent>
        <ModalSpinner />
      </ModalContent>
    );
  }

  const testStatus = getTestStatus(
    { status: data.status, owner: data.owner },
    { userId }
  );

  return (
    <ModalContent>
      <ModalBody>
        <section className="w-full flex flex-col sm:gap-[80px] gap-[15px]">
          <TestDetails {...data} testStatus={testStatus} />
          <TestDetailsActions {...data} testStatus={testStatus} />
        </section>
      </ModalBody>
    </ModalContent>
  );
};
