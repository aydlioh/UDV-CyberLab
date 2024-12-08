import { useNavigate } from 'react-router-dom';
import { TestSwitcher } from '@/features/test-switcher';

type QuestionsSwitcherProps = {
  id: string;
  isPreview?: boolean;
  current: number;
  total: number;
  setCurrent: (value: number) => void;
};

export const QuestionsSwitcher = ({
  id,
  isPreview = false,
  current,
  total,
  setCurrent,
}: QuestionsSwitcherProps) => {
  const navigate = useNavigate();
  const hasNext = current < total;
  const hasPrev = current > 1;

  const handleFinish = () => {
    if (isPreview) {
      navigate('/tests/my/created');
    } else {
      navigate(`/tests/${id}/overview`);
    }
  };

  const handleNextClick = () => setCurrent(current + 1);
  const handlePrevClick = () => setCurrent(current - 1);

  return (
    <TestSwitcher
      isFinished={!hasNext}
      handleNext={handleNextClick}
      handlePrev={handlePrevClick}
      handleFinish={handleFinish}
      nextLabel={isPreview ? 'Далее' : 'Ответить'}
      finishLabel={isPreview ? 'Создать' : 'Завершить'}
      hasNext={hasNext}
      hasPrev={hasPrev}
    />
  );
};
