import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, useUserStatus } from '@/entities/user';

export const TeacherGuard = () => {
  const user = useAuth(state => state.user);
  const { isTeacher } = useUserStatus();

  if (!user) {
    return null;
  }

  if (isTeacher) {
    return <Outlet />;
  }

  return <Navigate to="/tests" />;
};
