import { useUserStatus } from '@/entities/user';
import { Button } from '@/shared/ui';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const EmptyTestList = () => {
  const navigate = useNavigate();
  const { isTeacher } = useUserStatus();

  return (
    <div className="flex justify-center mt-[20px] w-full">
      <div className="max-w-[400px] w-full flex flex-col items-center">
        <p className="text-foreground font-w3ip text-3xl bg-main-gradient text-transparent bg-clip-text">
          404
        </p>
        <p className="text-second mb-3">Тесты не найдены</p>
        {isTeacher && (
          <Button
            startContent={<MdAdd size={22} />}
            size="md"
            radius="sm"
            className="bg-foreground/5 text-foreground/90 font-semibold"
            variant="light"
            // TODO_1 Запрос на создание
            onPress={() => navigate('/tests/manage/1/edit')}
          >
            Создать тест
          </Button>
        )}
      </div>
    </div>
  );
};
