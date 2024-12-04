import { Button } from '@/shared/ui';

const btnClassname = 'text-[16px] w-[160px] h-[40px] drop-shadow-base';

type TestSwitcherProps = {
  isFinished?: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handleFinish?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  hasFinish?: boolean;
  nextLabel?: string;
  prevLabel?: string;
  finishLabel?: string;
};

export const TestSwitcher = ({
  isFinished,
  handleNext,
  handlePrev,
  handleFinish,
  hasNext = true,
  hasPrev = true,
  hasFinish = true,
  nextLabel = 'Ответить',
  prevLabel = 'Назад',
  finishLabel = 'Завершить',
}: TestSwitcherProps) => {
  return (
    <div className="flex flex-row justify-between">
      <Button
        onClick={handlePrev}
        disabled={!hasPrev}
        size="md"
        className={btnClassname}
        color="white"
      >
        {prevLabel}
      </Button>
      {isFinished ? (
        <Button
          onClick={handleFinish}
          disabled={!hasFinish}
          size="md"
          className={btnClassname}
          color="gradient"
        >
          {finishLabel}
        </Button>
      ) : (
        <Button
          onClick={handleNext}
          disabled={!hasNext}
          size="md"
          className={btnClassname}
          color="gradient"
        >
          {nextLabel}
        </Button>
      )}
    </div>
  );
};
