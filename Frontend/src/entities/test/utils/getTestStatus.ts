import { ITestCard, TestStatus } from '@/entities/test';

type TestStatusOptions = {
  user?: string;
};

export const getTestStatus = (
  { owner, status }: Pick<ITestCard, 'owner' | 'status'>,
  options?: TestStatusOptions
): {
  isOwner: boolean;
  isRunning: boolean;
  isOver: boolean;
  isIdle: boolean;
} => {
  const isOwner = owner === options?.user;
  const isRunning = status === TestStatus.RUN;
  const isOver = status === TestStatus.OVER;
  const isIdle = status === TestStatus.IDLE;

  return { isOwner, isRunning, isOver, isIdle };
};
