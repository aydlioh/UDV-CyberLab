import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, UserRole } from '@/entities/user';


export const TeacherGuard = () => {
  const user = useAuth(state => state.user);

  if (user?.role === UserRole.TEACHER) {
    return <Outlet />;
  }

  return <Navigate to="/tests" />;
};

