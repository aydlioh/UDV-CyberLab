import { Button, Card } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

export const TestExit = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  return (
    <Card className="w-[90px] h-[70px] rounded-[8px] flex flex-col justify-between p-1">
      <Button
        onPress={() => navigate(`/tests/${id}/overview`)}
        className="rounded-[8px] p-0 h-full min-w-0 bg-white hover:bg-background/50"
      >
        <div className='flex flex-col items-center'>
          <p className="text-[12px]">Завершить</p>
          <IoClose size={32} />
        </div>
      </Button>
    </Card>
  );
};
