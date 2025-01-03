import { useMediaQuery, useNavigation } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import { MdAdd } from 'react-icons/md';

export const CreateTestButton = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const { scrollNavigate } = useNavigation();
  // TODO Запрос на создание, обработка, редирект на созданный тест, гварды там всякие не забыть ну и дизейбл

  const handleCreate = () => {
    scrollNavigate('/tests/manage/1/edit');
  };

  return (
    <Button
      fullWidth={isMobile}
      color="gradient"
      onPress={handleCreate}
      size={isMobile ? 'lg' : 'md'}
      endContent={<MdAdd size={22} />}
    >
      Создать тест
    </Button>
  );
};
