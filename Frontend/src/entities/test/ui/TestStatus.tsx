import { getPercentage } from '@/shared/common/utils';
import { Card } from '@/shared/ui';
import { Progress } from '@nextui-org/react';
import { TestTimer } from './TestTimer';

type TestStatusProps = {
  currentTime?: number;
  currentQuestions: number;
  totalQuestions: number;
};

export const TestStatus = ({
  currentQuestions,
  totalQuestions,
  currentTime,
}: TestStatusProps) => {
  return (
    <Card className="sm:w-[90px] sm:h-[70px] h-[40px] w-1/2 sm:px-[6px] py-[6px] px-[15px] rounded-[8px] flex sm:flex-col flex-row sm:gap-0 gap-1 justify-between">
      <div className='sm:w-full w-1/2'>
        <Progress
          aria-label="Test Progress"
          size="sm"
          radius="sm"
          classNames={{
            indicator: 'bg-main-gradient bg-gradient-to-r h-[6px]',
            track: 'h-[6px]',
            base: 'h-[6px]',
          }}
          value={getPercentage(currentQuestions, totalQuestions)}
        />
        <p className="text-center text-[12px]">
          {getPercentage(currentQuestions, totalQuestions)}%
        </p>
      </div>
      <TestTimer time={currentTime} />
    </Card>
  );
};
