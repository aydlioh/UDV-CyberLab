import { Outlet } from 'react-router-dom';

export const TestGuard = () => {
  return (
    <div>
      Test Guard
      <Outlet />
    </div>
  );
};
