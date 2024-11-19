import { getTestStatus, ITestCard } from '@/entities/test';
import { OwnerTools } from './owner/OwnerTools';
import { CircularProgress } from '@/shared/ui';
import { getPercentage } from '@/shared/common/utils';

type TestCardProps = {
  test: ITestCard;
};

export const TestCardTools = ({ test }: TestCardProps) => {
  // TODO useAuth.user.login
  const { isOwner, isRunning, isOver } = getTestStatus(test, {
    user: 'aydlioh',
  });

  if (isOwner) return <OwnerTools id={test.id} />;

  if (isRunning)
    return <CircularProgress aria-label="progress" strokeWidth={2.5} />;

  if (isOver && test.currentPoints !== undefined && test.totalPoints)
    return (
      <CircularProgress
        aria-label="progress"
        value={getPercentage(test.currentPoints, test.totalPoints)}
        showValueLabel
        strokeWidth={2.5}
        formatOptions={{ style: 'decimal' }}
      />
    );

  return null;
};
