import { myTestRoutes, myTestTeacherRoutes, Topbar } from '@/widgets/topbar';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from '@/shared/ui';
import { useUserStatus } from '@/entities/user';
import { CreateTestButton } from '@/features/create-test-button';

export const MyTestLayout = () => {
  const { pathname } = useLocation();
  const { isTeacher } = useUserStatus();

  const withCreateButton = pathname === '/tests/my/created' && isTeacher;

  return (
    <div className="w-full max-w-[712px]">
      <div className="sticky top-10 z-10 px-2">
        <div className="flex flex-row justify-between items-center mb-[12px] p-4 bg-background/40 backdrop-blur-sm rounded-lg">
          <Topbar links={isTeacher ? myTestTeacherRoutes : myTestRoutes} />
          {withCreateButton && <CreateTestButton />}
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-full">
            <Spinner size="page" color="primary" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
