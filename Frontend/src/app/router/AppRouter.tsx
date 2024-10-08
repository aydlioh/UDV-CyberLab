import { mainRoutes, authRoutes } from '@/pages';
import { AuthGuard, NoAuthGuard } from './guards';
import { useRoutes } from 'react-router-dom';
import { NotFountPage } from '@/pages/Error';

const routes = [
  {
    element: <NoAuthGuard />,
    children: [...authRoutes],
  },
  {
    element: <AuthGuard />,
    children: [...mainRoutes],
  },
  {
    path: '*',
    element: <NotFountPage />,
  },
];

export const AppRouter = () => useRoutes(routes);
