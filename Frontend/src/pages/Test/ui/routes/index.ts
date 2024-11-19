import { lazy } from 'react';

export const TestEditPage = lazy(() => import('./manage/TestEditPage'));
export const TestPreviewPage = lazy(() => import('./manage/TestPreviewPage'));
export const TestSettingsPage = lazy(() => import('./manage/TestSettingsPage'));
export const TestStatisticsPage = lazy(() => import('./manage/TestStatisticsPage'));

export const MyCreatedTestsPage = lazy(() => import('./my/MyCreatedTestsPage'));
export const MyPassedTestsPage = lazy(() => import('./my/MyPassedTestsPage'));
export const MyTestsPage = lazy(() => import('./my/MyTestsPage'));

export const TestPage = lazy(() => import('./test/TestPage'));
export const TestOverviewPage = lazy(() => import('./test/TestOverviewPage'));
export const TestResultPage = lazy(() => import('./test/TestResultPage'));

export const TestsPage = lazy(() => import('./tests/TestsPage'));
