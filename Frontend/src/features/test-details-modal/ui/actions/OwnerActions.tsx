import { Divider } from '@nextui-org/react';
import { Button } from '@/shared/ui';
import { useNavigation } from '@/shared/hooks';
import { useModalCloseHandler } from '../../model/hooks/useCloseHandler';

export const OwnerActions = ({ testId }: { testId: string }) => {
  const closeHandler = useModalCloseHandler();
  const { scrollNavigate } = useNavigation();

  const handleViewStatistics = () => {
    scrollNavigate(`/tests/manage/${testId}/statistics`);
  };

  const handleEdit = () => {
    scrollNavigate(`/tests/manage/${testId}/edit`);
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-center px-10">
      <Button color="gradient" className="w-1/2" onClick={closeHandler(handleEdit)}>
        Редактировать
      </Button>
      <Divider orientation="vertical" className="h-16 bg-foreground/30" />
      <Button
        className="w-1/2"
        variant="bordered"
        onClick={closeHandler(handleViewStatistics)}
      >
        Посмотреть статистику
      </Button>
    </div>
  );
};
