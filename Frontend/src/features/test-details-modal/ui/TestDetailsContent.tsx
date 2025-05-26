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
  const options = useTestDetailsModalStore(state => state.options);
  const userId = useAuth(state => state.user?.userId);
  const { data, isLoading, isFetching, error } = useTestDetails(
    options?.testId ?? ''
  );

  if (error || !options?.testId) return null;

  if (!data || isLoading || isFetching) {
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

  const isExpired = new Date(data.endDate).getTime() < new Date().getTime();

  return (
    <ModalContent>
      <ModalBody>
        <section className="w-full flex flex-col sm:gap-[80px] gap-[15px]">
          <TestDetails {...data} testStatus={testStatus} />
          <TestDetailsActions
            {...data}
            testStatus={testStatus}
            isExpired={isExpired}
          />
        </section>
      </ModalBody>
    </ModalContent>
  );
};
