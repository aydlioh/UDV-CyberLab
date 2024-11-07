import { authApi, useAuth } from '@/entities/auth';
import { tokenService } from '@/shared/services';
import { AccessTokenType } from '@/shared/types';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const login = useAuth(state => state.login);

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ['auth/login'],
    mutationFn: authApi.login,
    onSuccess: (response: AccessTokenType) => {
      login();
      tokenService.save(response);
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get('redirect') || '/';
      navigate(redirectPath);
    },
  });

  return { login: mutateAsync, isPending, error };
};
