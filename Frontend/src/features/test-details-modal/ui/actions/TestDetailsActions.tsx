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
  leftAttempts,
  testStatus: { isOwner, isRunning, isOver },
}: TestDetailsActionsProps) => {
  const hasAttempts = Boolean(leftAttempts && leftAttempts > 0);

  if (isOwner) return <OwnerActions testId={id} />;
  if (isRunning) return <ResumeAction testId={id} />;
  if (isOver) return <FinishedActions withRepeat={hasAttempts} testId={id} />;

  return <StartAction testId={id} />;
};
