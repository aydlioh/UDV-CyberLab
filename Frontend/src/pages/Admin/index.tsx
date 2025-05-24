import { RouteObject } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { DevelopmentPage } from '../Error';

export const adminRoutes: RouteObject[] = [
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <DevelopmentPage />,
      },
      {
        path: '/admin/users',
        element: <DevelopmentPage />,
      },
      {
        path: '/admin/projects',
        element: <DevelopmentPage />,
      },
      {
        path: '/admin/tests',
        element: <DevelopmentPage />,
      },
      {
        path: '/admin/news',
        element: <DevelopmentPage />,
      },
      {
        path: '/admin/education-materials',
        element: <DevelopmentPage />,
      },
    ],
  },
];
