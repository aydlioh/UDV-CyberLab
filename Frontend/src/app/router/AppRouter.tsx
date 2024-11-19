import { mainRoutes, authRoutes, testRoutes } from '@/pages';
import { AuthGuard, NoAuthGuard } from './guards';
import { useRoutes } from 'react-router-dom';
import { NotFountPage } from '@/pages/Error';

const routes = [
  {
    element: <NoAuthGuard />,
    children: [...authRoutes, ...testRoutes],
  },
  {
    element: <AuthGuard />,
    children: [...mainRoutes, ...testRoutes],
  },
  {
    path: '*',
    element: <NotFountPage />,
  },
];

export const AppRouter = () => useRoutes(routes);
