import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ErrorProvider } from './ErrorProvider';
import { QueryProvider } from './QueryProvider';
import { NuqsAdapter } from 'nuqs/adapters/react-router';
import { Spinner } from '@/shared/ui';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
      <QueryProvider>
        <NextUIProvider>
          <NuqsAdapter>
            <BrowserRouter>
              <Suspense
                fallback={
                  <div className="h-svh flex justify-center items-center">
                    <Spinner size="page" color="primary" label="Загрузка..." />
                  </div>
                }
              >
                {children}
              </Suspense>
            </BrowserRouter>
          </NuqsAdapter>
        </NextUIProvider>
      </QueryProvider>
    </ErrorProvider>
  );
};
