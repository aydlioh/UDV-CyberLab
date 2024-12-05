import { myTestRoutes, myTestTeacherRoutes, Topbar } from '@/widgets/topbar';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from '@/shared/ui';
import { useUserStatus } from '@/entities/user';
import { CreateTestButton } from '@/features/test-create-button';

export const MyTestLayout = () => {
  const { pathname } = useLocation();
  const { isTeacher } = useUserStatus();

  const withCreateButton = pathname === '/tests/my/created' && isTeacher;

  return (
    <div className="w-full max-w-[712px]">
      <div className="sticky top-[75px] z-10">
        <div className="flex flex-row justify-between items-center mb-[12px]">
          <Topbar links={isTeacher ? myTestTeacherRoutes : myTestRoutes} />
          <div className="bg-background rounded-xl">
            {withCreateButton && <CreateTestButton />}
          </div>
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
