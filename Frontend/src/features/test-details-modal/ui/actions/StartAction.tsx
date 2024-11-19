import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useModalCloseHandler } from '../../model/hooks/useCloseHandler';

export const StartAction = ({ testId }: { testId: string }) => {
  const closeHandler = useModalCloseHandler();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/tests/${testId}`);
  };

  return (
    <div className="flex justify-center">
      <Button onClick={closeHandler(handleStart)}>Начать прохождение</Button>
    </div>
  );
};
