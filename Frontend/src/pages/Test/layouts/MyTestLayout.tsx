import { myTestRoutes, myTestTeacherRoutes, Topbar } from '@/widgets/topbar';
import { Outlet, useLocation } from 'react-router-dom';
import { Spinner, StickyElement } from '@/shared/ui';
import { useUserStatus } from '@/entities/user';
import { CreateTestButton } from '@/features/test-create-button';
import { useMediaQuery } from '@/shared/hooks';
import { QueryBoundary } from '@/shared/common/components';

export const MyTestLayout = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const { pathname } = useLocation();
  const { isTeacher } = useUserStatus();

  const withCreateButton = pathname === '/tests/my/created' && isTeacher;

  return (
    <div className="w-full max-w-[712px] flex flex-col gap-3">
      <StickyElement shadow={!isTablet} className="top-[75px] z-10">
        <div className="flex md:flex-row flex-col justify-between md:items-center items-start">
          <Topbar links={isTeacher ? myTestTeacherRoutes : myTestRoutes} />
          <div className="bg-background rounded-xl self-end mt-3 sm:w-auto w-full drop-shadow-md">
            {withCreateButton && <CreateTestButton />}
          </div>
        </div>
      </StickyElement>
      <QueryBoundary
        fallbackLoader={
          <div className="flex justify-center items-center w-full mt-20">
            <Spinner size="page" color="primary" />
          </div>
        }
      >
        <Outlet />
      </QueryBoundary>
    </div>
  );
};
