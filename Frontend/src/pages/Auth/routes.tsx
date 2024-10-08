import { RouteObject } from 'react-router-dom';
import { AuthPage } from './ui/AuthPage';

export const authRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthPage />,
  },
];
