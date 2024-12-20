import { Sidebar, testRoutes } from '@/widgets/sidebar';
import { Spinner } from '@/shared/ui';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const TestLayout = () => {
  return (
    <main className="container min-h-[calc(100vh-80px)]">
      <div className="flex flex-row justify-start gap-[20px] mt-[12px] min-h-[calc(100vh-200px)]">
        <div className="sticky top-[75px] h-[200px]">
          <Sidebar links={testRoutes} withLogout />
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-full">
              <Spinner size="page" color="primary" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
