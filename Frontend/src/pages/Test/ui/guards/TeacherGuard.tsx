import { Navigate, Outlet } from 'react-router-dom';
import { useUserStatus } from '@/entities/user';

export const TeacherGuard = () => {
  const { isTeacher } = useUserStatus();

  if (isTeacher) {
    return <Outlet />;
  }

  return <Navigate to="/tests" />;
};
