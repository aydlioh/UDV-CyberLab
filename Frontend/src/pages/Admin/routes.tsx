import { RouteObject } from 'react-router-dom';
import { AdminPage } from './ui/AdminPage';

export const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminPage />,
  },
];
