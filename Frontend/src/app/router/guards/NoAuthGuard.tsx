import { useAuth } from '@/entities/auth';
import { tokenService } from '@/shared/services';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthGuard = () => {
  const login = useAuth(state => state.login);

  useEffect(() => {
    if (tokenService.hasValue()) {
      login();
    }
  }, [login]);

  if (tokenService.hasValue()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
