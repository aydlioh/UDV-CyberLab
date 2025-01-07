import { BiArrowBack } from 'react-icons/bi';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export type BackButtonProps = {
  label?: string;
  to?: string;
};

export const BackButton = ({ label = 'Назад', to }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button onPress={handleClick} size="md" variant="light">
      <BiArrowBack className="text-[25px]" /> {label}
    </Button>
  );
};
