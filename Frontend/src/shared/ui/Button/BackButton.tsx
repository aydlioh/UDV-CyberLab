import { BiArrowBack } from 'react-icons/bi';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onPress={() => navigate(-1)}
      size="md"
      variant="light"
      className="max-w-[100px]"
    >
      <BiArrowBack className="text-[25px]" /> Назад
    </Button>
  );
};
