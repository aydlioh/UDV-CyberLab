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
    <Card className="w-[90px] h-[70px] p-[6px] rounded-[8px] flex flex-col justify-between">
      <div>
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
