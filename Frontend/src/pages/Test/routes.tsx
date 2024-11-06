import { RouteObject } from 'react-router-dom';
import { CreateTestPage } from './ui/CreateTestPage';
import { TestsPage } from './ui/TestsPage';
import { TestPage } from './ui/TestPage';

export const testRoutes: RouteObject[] = [
  {
    path: '/tests',
    element: <div>TEST LAYOUT</div>,
    children: [
      {
        path: '',
        element: <TestsPage />,
      },
      {
        path: ':id',
        element: <TestPage />,
      },
      {
        path: ':id/result',
        element: <div>Test result</div>,
      },
      {
        path: 'my',
        element: <div>My Tests</div>,
      },
      {
        path: 'my/passed',
        element: <div>My Tests Passed</div>,
      },
      {
        element: <div>TEACHER GUARD</div>,
        children: [
          {
            path: 'my/created',
            element: <div>My Tests Created</div>,
          },
          {
            path: 'manage/:id/edit',
            element: <CreateTestPage />,
          },
          {
            path: 'manage/:id/settings',
            element: <div>Test Settings</div>,
          },
          {
            path: 'manage/:id/preview',
            element: <div>Test Preview</div>,
          },
          {
            path: 'manage/:id/statistics',
            element: <div>Test Statistics</div>,
          },
        ],
      },
    ],
  },
];
