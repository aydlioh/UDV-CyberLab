import { mainRoutes, authRoutes, testRoutes } from '@/pages';
import { AuthGuard, NoAuthGuard } from './guards';
import { useRoutes } from 'react-router-dom';
import { NotFoundPage } from '@/pages/Error';

import { lazy } from 'react';
import { eventsRoutes } from '@/pages/Event';
import { labsRoutes } from '@/pages/Lab';
import { materialsRoutes } from '@/pages/Materials';
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
        children: [
          ...mainRoutes,
          ...testRoutes,
          ...eventsRoutes,
          ...labsRoutes,
          ...materialsRoutes,
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const AppRouter = () => useRoutes(routes);
