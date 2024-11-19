import { useNavigate } from 'react-router-dom';
import { Divider } from '@nextui-org/react';
import { useModalCloseHandler } from '../../model/hooks/useCloseHandler';
import { Button } from '@/shared/ui';

export const OwnerActions = ({ testId }: { testId: string }) => {
  const closeHandler = useModalCloseHandler();
  const navigate = useNavigate();

  const handleViewStatistics = () => {
    navigate(`/tests/manage/${testId}/statistics`);
  };

  const handleEdit = () => {
    navigate(`/tests/manage/${testId}/edit`);
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-center px-10">
      <Button className="w-1/2" onClick={closeHandler(handleEdit)}>
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
