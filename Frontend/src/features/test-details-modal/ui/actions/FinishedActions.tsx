import { useNavigation } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import { Divider } from '@nextui-org/react';
import { useModalCloseHandler } from '../../model/hooks/useCloseHandler';

export const FinishedActions = ({
  testId,
  withRepeat,
}: {
  testId: string;
  withRepeat: boolean;
}) => {
  const closeHandler = useModalCloseHandler();
  const { scrollNavigate } = useNavigation();

  const handleViewResults = () => {
    scrollNavigate(`/tests/${testId}/results`);
  };

  const handleRepeat = () => {
    scrollNavigate(`/tests/${testId}`);
  };

  return (
    <div className="flex sm:flex-row flex-col sm:gap-4 gap-2 items-center justify-center sm:px-10 px-2">
      <Button
        color="gradient"
        className="sm:w-1/2 w-full"
        onPress={closeHandler(handleViewResults)}
      >
        Посмотреть результат
      </Button>
      {withRepeat && (
        <>
          <Divider orientation="vertical" className="h-16 bg-foreground/30 sm:block hidden" />
          <Button
            className="sm:w-1/2 w-full"
            variant="bordered"
            onPress={closeHandler(handleRepeat)}
          >
            Пройти заново
          </Button>
        </>
      )}
    </div>
  );
};
