import { useNavigation } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import { useModalCloseHandler } from '../../model/hooks/useCloseHandler';

export const StartAction = ({ testId }: { testId: string }) => {
  const closeHandler = useModalCloseHandler();
  const { scrollNavigate } = useNavigation();

  const handleStart = () => {
    scrollNavigate(`/tests/${testId}`);
  };

  return (
    <div className="flex justify-center">
      <Button color="gradient" onPress={closeHandler(handleStart)}>
        Начать прохождение
      </Button>
    </div>
  );
};
