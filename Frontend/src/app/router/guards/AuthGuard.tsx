import { useAuth } from '@/entities/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const isAuthorized = useAuth(state => state.isAuthorized)();

  if (isAuthorized) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};