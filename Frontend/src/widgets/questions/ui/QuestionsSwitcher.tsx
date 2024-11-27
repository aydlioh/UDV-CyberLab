import { Button } from '@/shared/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { QuestionNavigationProps } from '../model/types';

const btnClassname = 'text-[16px] w-[160px] h-[40px] drop-shadow-base';

export const QuestionsSwitcher = ({
  current,
  total,
  setCurrent,
}: QuestionNavigationProps) => {
  const navigate = useNavigate();
  const { testId } = useParams<{ testId: string }>();
  const hasNext = current < total;
  const hasPrev = current > 1;

  const handleFinish = () => navigate(`/tests/${testId}/overview`);
  const handleNextClick = () => setCurrent(current + 1);
  const handlePrevClick = () => setCurrent(current - 1);

  return (
    <div className="flex flex-row justify-between">
      <Button
        onClick={handlePrevClick}
        disabled={!hasPrev}
        size="md"
        className={btnClassname}
        color="white"
      >
        Назад
      </Button>
      {!hasNext ? (
        <Button
          size="md"
          className={btnClassname}
          color="gradient"
          onClick={handleFinish}
        >
          Завершить
        </Button>
      ) : (
        <Button
          onClick={handleNextClick}
          disabled={!hasNext}
          size="md"
          className={btnClassname}
          color="gradient"
        >
          Ответить
        </Button>
      )}
    </div>
  );
};
