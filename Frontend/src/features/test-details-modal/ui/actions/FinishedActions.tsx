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
    scrollNavigate(`/tests/${testId}/result`);
  };

  const handleRepeat = () => {
    scrollNavigate(`/tests/${testId}`);
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-center px-10">
      <Button className="w-1/2" onClick={closeHandler(handleViewResults)}>
        Посмотреть результат
      </Button>
      {withRepeat && (
        <>
          <Divider orientation="vertical" className="h-16 bg-foreground/30" />
          <Button
            className="w-1/2"
            variant="bordered"
            onClick={closeHandler(handleRepeat)}
          >
            Пройти заново
          </Button>
        </>
      )}
    </div>
  );
};
