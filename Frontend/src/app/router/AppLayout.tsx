import { Scrollbar } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <Scrollbar>
      <div>
        <Header />
        <Outlet />
      </div>
    </Scrollbar>
  );
};

export default AppLayout;
