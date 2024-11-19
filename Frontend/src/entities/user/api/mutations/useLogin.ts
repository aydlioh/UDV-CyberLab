import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { tokenService } from '@/shared/services';
import { AccessTokenType } from '@/shared/types';
import { useAuth } from '../../model/store';
import { authApi } from '../services/authAPI';

export const useLogin = () => {
  const navigate = useNavigate();
  const login = useAuth(state => state.login);

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ['auth/login'],
    mutationFn: authApi.login,
    onSuccess: (response: AccessTokenType) => {
      tokenService.save(response);
      login();
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get('redirect_path') || '/';
      navigate(redirectPath);
    },
  });

  return { login: mutateAsync, isPending, error };
};
