import { Outlet } from 'react-router-dom';
import { LayoutWithSidebar, QueryBoundary } from '@/shared/common/components';
import { Spinner } from '@/shared/ui';
import { adminRoutes, Sidebar } from '@/widgets/sidebar';

export const AdminLayout = () => {
  return (
    <LayoutWithSidebar sidebarSlot={<Sidebar links={adminRoutes} withLogout />}>
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
