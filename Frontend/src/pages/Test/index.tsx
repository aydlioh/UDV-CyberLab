import { Navigate, RouteObject } from 'react-router-dom';
import { ManageTestLayout, MyTestLayout, TestLayout } from './layouts';
import { TestGuard } from './guards';
import {
  TestsPage,
  TestPage,
  TestOverviewPage,
  MyCreatedTestsPage,
  MyPassedTestsPage,
  MyTestsPage,
  TestPreviewPage,
  TestResultPage,
  TestSettingsPage,
  TestStatisticsPage,
  TestResultListPage,
  EditCustomPage,
  EditGeneratePage,
  EditAIPage,
  TestResultPreviewPage,
} from './routes';
import { TeacherGuard } from '@/entities/user';

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
        path: ':testId',
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
            path: 'results',
            children: [
              {
                path: '',
                element: <TestResultListPage />,
              },
              {
                path: ':attemptId',
                element: <TestResultPage />,
              },
              {
                path: ':attemptId/preview',
                element: <TestResultPreviewPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'my',
        element: <MyTestLayout />,
        children: [
          {
            path: '',
            element: <MyTestsPage />,
          },
          {
            path: 'passed',
            element: <MyPassedTestsPage />,
          },
          {
            element: <TeacherGuard redirectPath="/tests" />,
            children: [
              {
                path: 'created',
                element: <MyCreatedTestsPage />,
              },
            ],
          },
        ],
      },
      {
        element: <TeacherGuard redirectPath="/tests" />,
        children: [
          {
            element: <ManageTestLayout />,
            children: [
              {
                path: 'manage/:testId/edit',
                element: <Navigate replace to="custom" />,
              },
              {
                path: 'manage/:testId/edit/custom',
                element: <EditCustomPage />,
              },
              {
                path: 'manage/:testId/edit/generate',
                element: <EditGeneratePage />,
              },
              {
                path: 'manage/:testId/edit/ai',
                element: <EditAIPage />,
              },
              {
                path: 'manage/:testId/settings',
                element: <TestSettingsPage />,
              },
              {
                path: 'manage/:testId/preview',
                element: <TestPreviewPage />,
              },
            ],
          },
          {
            path: 'manage/:testId/statistics',
            element: <TestStatisticsPage />,
          },
        ],
      },
    ],
  },
];
