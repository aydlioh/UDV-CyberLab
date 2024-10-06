import { adminRoutes, mainRoutes } from '@/pages';
import { useRoutes } from 'react-router-dom';

const routes = [
  {
    path: '/',
    children: [...mainRoutes, ...adminRoutes],
  },
];

export const AppRouter = () => useRoutes(routes);
