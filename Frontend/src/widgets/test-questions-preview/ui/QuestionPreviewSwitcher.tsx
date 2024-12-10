import { ContentSwitcher } from '@/features/content-switcher';

type QuestionsPreviewSwitcherProps = {
  id: string;
  current: number;
  total: number;
  setCurrent: (value: number) => void;
  handleFinish?: () => void;
  handleStart?: () => void;
};

export const QuestionsPreviewSwitcher = ({
  current,
  total,
  setCurrent,
  handleFinish,
  handleStart,
}: QuestionsPreviewSwitcherProps) => {

  const hasNext = current < total;
  const hasPrev = current > 1;

  const handleNextClick = () => setCurrent(current + 1);
  const handlePrevClick = () => setCurrent(current - 1);

  return (
    <ContentSwitcher
      isStarted={!hasPrev}
      isFinished={!hasNext}
      handleStart={handleStart}
      handleNext={handleNextClick}
      handlePrev={handlePrevClick}
      handleFinish={handleFinish}
      hasNext={hasNext}
      hasPrev={hasPrev}
      nextLabel="Далее"
    />
  );
};
