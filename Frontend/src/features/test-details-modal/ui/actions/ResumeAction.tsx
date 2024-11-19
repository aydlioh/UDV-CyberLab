import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useModalCloseHandler } from '../../model/hooks/useCloseHandler';

export const ResumeAction = ({ testId }: { testId: string }) => {
  const closeHandler = useModalCloseHandler();
  const navigate = useNavigate();

  const handleResume = () => {
    navigate(`/tests/${testId}`);
  };

  return (
    <div className="flex justify-center">
      <Button onClick={closeHandler(handleResume)}>
        Продолжить прохождение
      </Button>
    </div>
  );
};
