import { mainRoutes, authRoutes, testRoutes } from '@/pages';
import { AuthGuard, NoAuthGuard } from './guards';
import { useRoutes } from 'react-router-dom';
import { NotFountPage } from '@/pages/Error';

import { lazy } from 'react';
const AppLayout = lazy(() => import('./AppLayout'));

const routes = [
  {
    element: <NoAuthGuard />,
    children: [...authRoutes],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: <AppLayout />,
        children: [...mainRoutes, ...testRoutes],
      },
    ],
  },
  {
    path: '*',
    element: <NotFountPage />,
  },
];

export const AppRouter = () => useRoutes(routes);
