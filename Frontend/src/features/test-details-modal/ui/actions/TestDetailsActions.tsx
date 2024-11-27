import { getTestStatus, ITestDetails } from '@/entities/test-info';
import { OwnerActions } from './OwnerActions';
import { ResumeAction } from './ResumeAction';
import { StartAction } from './StartAction';
import { FinishedActions } from './FinishedActions';

type TestDetailsActionsProps = ITestDetails & {
  testStatus: ReturnType<typeof getTestStatus>;
};

export const TestDetailsActions = ({
  id,
  totalAttempts,
  remainingAttempts,
  testStatus: { isOwner, isRunning, isOver },
}: TestDetailsActionsProps) => {
  const hasAttempts = Boolean(
    totalAttempts ? remainingAttempts && remainingAttempts > 0 : true
  );

  if (isOwner) return <OwnerActions testId={id} />;
  if (isRunning) return <ResumeAction testId={id} />;
  if (isOver) return <FinishedActions withRepeat={hasAttempts} testId={id} />;

  return <StartAction testId={id} />;
};
