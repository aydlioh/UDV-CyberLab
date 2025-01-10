import { ITestDetails } from '../model/types/ITestDetails';
import { TestIcon } from '@/shared/assets/svgs';
import { TestTimeFormatter } from './TestTimeFormatter';
import { getTestSubject, getTestDifficulty, getTestStatus } from '../';
import { CircularProgress } from '@/shared/ui';
import { getPercentage } from '@/shared/common/utils';
import { TestAttemptsStatus } from './TestAttemptsStatus';

type TestDetailsProps = ITestDetails & {
  testStatus: ReturnType<typeof getTestStatus>;
};

const progressStyles = 'sm:w-[184px] sm:h-[184px] h-[150px] w-[150px]';

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
      <div className="flex flex-row gap-4 items-start justify-center">
        <TestIcon className="sm:w-[73px] w-[60px] h-auto sm:block hidden" />
        <div className="flex flex-col sm:gap-[14px]">
          <div>
            <h3 className="sm:text-[32px] mobile:text-[28px] text-[24px] sm:leading-[39px] leading-[28px] mb-[8px] line-clamp-3 font-medium">
              {title}
            </h3>
            <p className="sm:text-[20px] text-[16px] leading-[24px]">
              Открыт с <TestTimeFormatter time={startDate} /> до{' '}
              <TestTimeFormatter time={endDate} />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-[15px] justify-between">
            <div className="flex flex-col gap-[8px] sm:text-[20px] text-[16px] sm:leading-[24px] leading-[20px] sm:mt-[30px] mt-[20px]">
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
            <div className="flex justify-center">
              {!isOwner && (
                <CircularProgress
                  aria-label="text progress"
                  className={isRunning ? 'animate-pulse' : ''}
                  classNames={{
                    base: progressStyles,
                    svg: progressStyles,
                    svgWrapper: progressStyles,
                    value: 'sm:text-[40px] text-[30px]',
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
