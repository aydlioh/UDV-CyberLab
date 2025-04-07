import { Sidebar, projectRoutes } from '@/widgets/sidebar';
import { Spinner, StickyElement } from '@/shared/ui';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@/shared/hooks';
import { QueryBoundary } from '@/shared/common/components';

export const ProjectLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <main className="min-h-[calc(100vh-80px)]">
      <div className="flex flex-row lg:justify-start justify-center gap-[20px] mt-[12px] min-h-[calc(100vh-200px)]">
        {isDesktop && (
          <StickyElement className="top-[75px] h-[200px]">
            <Sidebar links={projectRoutes} withLogout />
          </StickyElement>
        )}
        <QueryBoundary
          fallbackLoader={
            <div className="flex justify-center items-center w-full">
              <Spinner size="page" color="primary" />
            </div>
          }
        >
          <Outlet />
        </QueryBoundary>
      </div>
    </main>
  );
};
