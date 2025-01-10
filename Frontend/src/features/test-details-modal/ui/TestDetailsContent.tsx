import { ModalBody, ModalContent, Spinner } from '@/shared/ui';
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
  const user = useAuth(state => state.user?.userName);
  const { data, isLoading, error } = useTestDetails(testId ?? '');

  if (error) return null;

  if (isLoading) {
    return (
      <ModalContent>
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <Spinner color="white" size="page" />
        </div>
      </ModalContent>
    );
  }

  const testStatus = getTestStatus(
    { status: data.status, owner: data.owner },
    { user }
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
