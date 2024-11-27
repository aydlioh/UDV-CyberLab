import { ITestDetails } from '../model/dto/ITestDetails';
import { TestIcon } from '@/shared/assets/svgs';
import { TestTimeFormatter } from './TestTimeFormatter';
import { getTestSubject, getTestDifficulty, getTestStatus } from '../';
import { CircularProgress } from '@/shared/ui';
import { getPercentage } from '@/shared/common/utils';
import { TestAttemptsStatus } from './TestAttemptsStatus';

type TestDetailsProps = ITestDetails & {
  testStatus: ReturnType<typeof getTestStatus>;
};

export const TestDetails = ({
  title,
  startDate,
  endDate,
  subject,
  difficulty,
  totalAttempts,
  remainingAttempts,
  totalPoints,
  currentPoints,
  testStatus: { isRunning, isOwner },
}: TestDetailsProps) => {
  const progress = currentPoints
    ? getPercentage(currentPoints, totalPoints)
    : 0;
  return (
    <div>
      <div className="flex flex-row gap-4 items-start">
        <TestIcon className="w-[73px] h-auto" />
        <div className="flex flex-col gap-[14px]">
          <div>
            <h3 className="text-[32px] leading-[39px] mb-[4px]">{title}</h3>
            <p className="text-[20px] leading-[24px]">
              Открыт с <TestTimeFormatter time={startDate} /> до{' '}
              <TestTimeFormatter time={endDate} />
            </p>
          </div>
          <div className="flex flex-row gap-[15px] justify-between">
            <div className="flex flex-col gap-[8px] text-[20px] leading-[24px] mt-[30px]">
              <p>
                Тематика:{' '}
                <span className="font-semibold">{getTestSubject(subject)}</span>
              </p>
              <p>
                Сложность:{' '}
                <span className="font-semibold">
                  {getTestDifficulty(difficulty)}
                </span>
              </p>
              <p>
                Макс. баллов:{' '}
                <span className="font-semibold">{totalPoints}</span>
              </p>
              {!isOwner && (
                <TestAttemptsStatus
                  totalAttempts={totalAttempts}
                  remainingAttempts={remainingAttempts}
                />
              )}
            </div>
            <div>
              {!isOwner && (
                <CircularProgress
                  aria-label="text progress"
                  className={isRunning ? 'animate-pulse' : ''}
                  classNames={{
                    base: 'w-[184px] h-[184px]',
                    svg: 'w-[184px] h-[184px]',
                    svgWrapper: 'w-[184px] h-[184px]',
                    value: 'text-[40px]',
                  }}
                  value={progress}
                  showValueLabel
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
