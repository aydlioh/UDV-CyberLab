import { Outlet } from 'react-router-dom';
import { LayoutWithSidebar, QueryBoundary } from '@/shared/common/components';
import { Spinner } from '@/shared/ui';
import { Sidebar, testRoutes } from '@/widgets/sidebar';

export const TestLayout = () => {
  return (
    <LayoutWithSidebar sidebarSlot={<Sidebar links={testRoutes} withLogout />}>
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
