import { getTestStatus, ITestDetails, TestDetails } from '@/entities/test';
import { useTestDetailsModalStore } from '../model/store';
import { Modal, ModalBody, ModalContent } from '@/shared/ui';
import { TestDetailsActions } from './actions/TestDetailsActions';
import { useAuth } from '@/entities/user';

export const tests: ITestDetails[] = [
  {
    id: '1',
    owner: 'aydlioh',
    title: 'Тест по стереометрии',
    difficulty: 'easy',
    subject: 'english',
    totalPoints: 10,
    currentPoints: undefined,
    startDate: new Date(),
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
    status: 'idle',
  },
  {
    id: '2',
    owner: 'qwerty',
    title: 'Тест по английскому языку',
    difficulty: 'easy',
    subject: 'english',
    startDate: new Date(),
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
    totalPoints: 12,
    status: 'idle',
  },
  {
    id: '3',
    owner: 'zzz',
    title: 'Тест по математике',
    difficulty: 'medium',
    subject: 'math',
    startDate: new Date(),
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
    totalAttempts: 2,
    remainingAttempts: 2,
    totalPoints: 15,
    status: 'run',
  },
  {
    id: '4',
    owner: 'zzz',
    title: 'Тест по физике',
    difficulty: 'hard',
    subject: 'physics',
    startDate: new Date(),
    endDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
    totalAttempts: 1,
    remainingAttempts: 0,
    totalPoints: 15,
    currentPoints: 7,
    status: 'over',
  },
  {
    id: '5',
    owner: 'russian_bear',
    title: 'Тест по физике с 2 попытками',
    difficulty: 'hard',
    subject: 'physics',
    startDate: new Date(),
    endDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
    totalAttempts: 2,
    remainingAttempts: 1,
    totalPoints: 10,
    currentPoints: 8,
    status: 'over',
  },
];

export const TestDetailsModal = () => {
  const user = useAuth(state => state.user?.login);
  const { isOpen, close, testId } = useTestDetailsModalStore();

  const test = tests.find(test => test.id === testId);

  if (!test) return null;

  const testStatus = getTestStatus(
    { status: test.status, owner: test.owner },
    {
      user,
    }
  );

  return (
    <Modal isOpen={isOpen} onClose={close} size="lg">
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
