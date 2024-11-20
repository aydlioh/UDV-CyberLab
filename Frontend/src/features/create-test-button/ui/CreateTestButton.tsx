import { Button } from '@/shared/ui';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const CreateTestButton = () => {
  const navigate = useNavigate();
  // TODO Запрос на создание, обработка, редирект на созданный тест, гварды там всякие не забыть ну и дизейбл

  const handleCreate = () => {
    navigate('/tests/manage/1/edit');
  };

  return (
    <Button
      onClick={handleCreate}
      size="md"
      endContent={<MdAdd size={22} />}
    >
      Создать тест
    </Button>
  );
};
