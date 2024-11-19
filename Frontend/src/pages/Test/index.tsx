import { RouteObject } from 'react-router-dom';
import { TestLayout } from './ui/layouts';
import { TeacherGuard, TestGuard } from './ui/guards';
import {
  TestsPage,
  TestPage,
  TestOverviewPage,
  MyCreatedTestsPage,
  MyPassedTestsPage,
  MyTestsPage,
  TestEditPage,
  TestPreviewPage,
  TestResultPage,
  TestSettingsPage,
  TestStatisticsPage,
} from './ui/routes';

export const testRoutes: RouteObject[] = [
  {
    path: '/tests',
    element: <TestLayout />,
    children: [
      {
        path: '',
        element: <TestsPage />,
      },
      {
        path: ':id',
        children: [
          {
            element: <TestGuard />,
            children: [
              {
                path: '',
                element: <TestPage />,
              },
              {
                path: 'overview',
                element: <TestOverviewPage />,
              },
            ],
          },
          {
            path: 'result',
            element: <TestResultPage />,
          },
        ],
      },
      {
        path: 'my',
        element: <MyTestsPage />,
      },
      {
        path: 'my/passed',
        element: <MyPassedTestsPage />,
      },
      {
        element: <TeacherGuard />,
        children: [
          {
            path: 'my/created',
            element: <MyCreatedTestsPage />,
          },
          {
            path: 'manage/:id/edit',
            element: <TestEditPage />,
          },
          {
            path: 'manage/:id/settings',
            element: <TestSettingsPage />,
          },
          {
            path: 'manage/:id/preview',
            element: <TestPreviewPage />,
          },
          {
            path: 'manage/:id/statistics',
            element: <TestStatisticsPage />,
          },
        ],
      },
    ],
  },
];
