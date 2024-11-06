import { authApi } from '@/entities/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ['auth/register'],
    mutationFn: authApi.register,
    onSuccess: () => {
      navigate('/login');
    },
  });

  return { register: mutateAsync, isPending, error };
};
