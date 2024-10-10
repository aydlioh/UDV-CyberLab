import { RouteObject } from 'react-router-dom';
import { LoginPage } from './ui/LoginPage';
import { RegistrationPage } from './ui/RegistrationPage';
import { AuthLayout } from './ui/AuthLayout';

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
