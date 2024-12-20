import { useNavigate } from 'react-router-dom';
import { ContentSwitcher } from '@/features/content-switcher';

type QuestionsSwitcherProps = {
  id: string;
  current: number;
  total: number;
  setCurrent: (value: number) => void;
};

export const QuestionsSwitcher = ({
  id,
  current,
  total,
  setCurrent,
}: QuestionsSwitcherProps) => {
  const navigate = useNavigate();
  const hasNext = current < total;
  const hasPrev = current > 1;

  const handleFinish = () => {
    navigate(`/tests/${id}/overview`);
  };

  const handleNextClick = () => setCurrent(current + 1);
  const handlePrevClick = () => setCurrent(current - 1);

  return (
    <ContentSwitcher
      isFinished={!hasNext}
      handleNext={handleNextClick}
      handlePrev={handlePrevClick}
      handleFinish={handleFinish}
      hasNext={hasNext}
      hasPrev={hasPrev}
    />
  );
};
