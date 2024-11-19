import { RouteObject } from 'react-router-dom';
import { AuthLayout } from './ui/layouts';
import { LoginPage, RegistrationPage } from './ui/routes';

export const authRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/registration',
        element: <RegistrationPage />,
      },
    ],
  },
];
