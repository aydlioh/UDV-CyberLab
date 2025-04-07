import { useMediaQuery } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import { MdAdd } from 'react-icons/md';

export const CreateProjectButton = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const handleCreate = () => {
    console.log('Create...');
  };

  return (
    <Button
      // isDisabled={isPending}
      fullWidth={isMobile}
      color="gradient"
      onPress={handleCreate}
      size={isMobile ? 'lg' : 'md'}
      endContent={<MdAdd size={22} />} // Убрать
      // endContent={
      //   isPending ? <Spinner size="sm" color="white" /> : <MdAdd size={22} />
      // }
    >
      Добавить проект
    </Button>
  );
};
