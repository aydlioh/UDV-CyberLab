import { getPercentage } from '@/shared/common/utils';
import { Card } from '@/shared/ui';
import { Progress } from '@nextui-org/react';

type TestStatusProps = {
  duration?: number;
  currentTime?: number;
  currentQuestions: number;
  totalQuestions: number;
};

export const TestStatus = ({
  currentQuestions,
  totalQuestions,
}: TestStatusProps) => {
  return (
    <Card>
      <Progress
        size="sm"
        radius="sm"
        classNames={{
          track: 'drop-shadow-md border border-default',
          indicator: 'bg-gradient-to-r from-pink-500 to-yellow-500',
          label: 'tracking-wider font-medium text-default-600',
          value: 'text-foreground/60',
        }}
        value={getPercentage(currentQuestions, totalQuestions)}
        showValueLabel={true}
      />
    </Card>
  );
};
