import { RouteObject } from 'react-router-dom';
import { CreateTestPage } from './ui/CreateTestPage';
import { TestsPage } from './ui/TestsPage';
import { TestPage } from './ui/TestPage';

export const testRoutes: RouteObject[] = [
  {
    path: '/tests',
    element: <TestsPage />,
  },
  {
    path: '/tests/:id',
    element: <TestPage />,
  },
  {
    path: '/tests/manage/:id',
    element: <div>My Tests</div>,
  },
  {
    path: '/tests/manage/:id/edit',
    element: <div>Edit test</div>,
  },
  {
    path: '/tests/manage/create',
    element: <CreateTestPage />,
  },
];
