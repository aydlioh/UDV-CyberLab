import { Button } from '@/shared/ui';
import clsx from 'clsx';

const btnClassname = 'text-[16px] w-[160px] h-[40px] drop-shadow-base';

type ContentSwitcherProps = {
  isFinished?: boolean;
  isStarted?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
  handleNext?: () => void;
  handlePrev?: () => void;
  handleFinish?: () => void;
  handleStart?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  hasFinish?: boolean;
  nextLabel?: string;
  prevLabel?: string;
  finishLabel?: string;
  startLabel?: string;
};

export const ContentSwitcher = ({
  isFinished,
  isStarted,
  isPrev = true,
  isNext = true,
  handleNext = () => {},
  handlePrev = () => {},
  handleFinish = () => {},
  handleStart = () => {},
  hasNext = true,
  hasPrev = true,
  hasFinish = true,
  nextLabel = 'Ответить',
  prevLabel = 'Назад',
  finishLabel = 'Завершить',
  startLabel = 'Назад'
}: ContentSwitcherProps) => {
  return (
    <div
      className={clsx(
        'flex flex-row mb-10  ',
        !isPrev && 'justify-end',
        !isNext && 'justify-start',
        isPrev && isNext && 'justify-between'
      )}
    >
      {isStarted ? (
        <Button
          onPress={handleStart}
          size="md"
          className={btnClassname}
          color="white"
        >
          {startLabel}
        </Button>
      ) : (
        isPrev && (
          <Button
            isDisabled={!hasPrev}
            onPress={handlePrev}
            size="md"
            className={btnClassname}
            color="white"
          >
            {prevLabel}
          </Button>
        )
      )}
      {isFinished ? (
        <Button
          onPress={handleFinish}
          isDisabled={!hasFinish}
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
            isDisabled={!hasNext}
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
