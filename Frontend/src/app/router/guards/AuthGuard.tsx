import { useAuth, useSessionTimeout } from '@/entities/auth';
import { tokenService } from '@/shared/services';
import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';

export const AuthGuard = () => {
  const login = useAuth(state => state.login);
  const logout = useAuth(state => state.logout);
  const navigate = useNavigate();
  const location = useLocation();

  useSessionTimeout({
    expirationTime: tokenService.get()?.expiration,
    onExpire: () => {
      console.log(`Token expired /login?redirect=${location.pathname}`);
      tokenService.destroy();
      logout();
      navigate(`/login?redirect=${location.pathname}`);
    },
  });

  useEffect(() => {
    if (tokenService.hasValue()) {
      login();
    }
  }, [login]);

  if (tokenService.hasValue()) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={`/login?redirect=${location.pathname}`}
      replace
    />
  );
};
