import { useAuth } from '@/entities/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthGuard = () => {
  const isAuthorized = useAuth(state => state.isAuthorized)();

  if (isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};