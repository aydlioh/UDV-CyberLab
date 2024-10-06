import { RouteObject } from 'react-router-dom';
import { MainPage } from './ui/MainPage';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
];
