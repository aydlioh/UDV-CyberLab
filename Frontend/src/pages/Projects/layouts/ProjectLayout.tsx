import { Outlet } from 'react-router-dom';
import { Sidebar, projectRoutes } from '@/widgets/sidebar';
import { Spinner } from '@/shared/ui';
import { QueryBoundary, LayoutWithSidebar } from '@/shared/common/components';

export const ProjectLayout = () => {
  return (
    <LayoutWithSidebar sidebarSlot={<Sidebar links={projectRoutes} withLogout />}>
      <QueryBoundary
        fallbackLoader={
          <div className="flex justify-center items-center w-full">
            <Spinner size="page" color="primary" />
          </div>
        }
      >
        <Outlet />
      </QueryBoundary>
    </LayoutWithSidebar>
  );
};
