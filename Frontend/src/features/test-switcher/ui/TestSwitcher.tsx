import { Button } from '@/shared/ui';
import clsx from 'clsx';

const btnClassname = 'text-[16px] w-[160px] h-[40px] drop-shadow-base';

type TestSwitcherProps = {
  isFinished?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
  handleNext?: () => void;
  handlePrev?: () => void;
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
  isPrev = true,
  isNext = true,
  handleNext = () => {},
  handlePrev = () => {},
  handleFinish = () => {},
  hasNext = true,
  hasPrev = true,
  hasFinish = true,
  nextLabel = 'Ответить',
  prevLabel = 'Назад',
  finishLabel = 'Завершить',
}: TestSwitcherProps) => {
  return (
    <div
      className={clsx(
        'flex flex-row',
        !isPrev && 'justify-end',
        !isNext && 'justify-start',
        isPrev && isNext && 'justify-between',
      )}
    >
      {isPrev && (
        <Button
          onPress={handlePrev}
          disabled={!hasPrev}
          size="md"
          className={btnClassname}
          color="white"
        >
          {prevLabel}
        </Button>
      )}
      {isFinished ? (
        <Button
          onPress={handleFinish}
          disabled={!hasFinish}
          size="md"
          className={btnClassname}
          color="gradient"
        >
          {finishLabel}
        </Button>
      ) : (
        isNext && (
          <Button
            onPress={handleNext}
            disabled={!hasNext}
            size="md"
            className={btnClassname}
            color="gradient"
          >
            {nextLabel}
          </Button>
        )
      )}
    </div>
  );
};
