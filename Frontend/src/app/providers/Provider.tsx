import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { NextUIProvider, Spinner } from '@nextui-org/react';
import { ErrorProvider } from './ErrorProvider';
import { QueryProvider } from './QueryProvider';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
      <QueryProvider>
        <NextUIProvider>
          <BrowserRouter>
            <Suspense
              fallback={
                <div className="h-svh flex justify-center items-center">
                  <Spinner size="lg" label="Загрузка..." />
                </div>
              }
            >
              {children}
            </Suspense>
          </BrowserRouter>
        </NextUIProvider>
      </QueryProvider>
    </ErrorProvider>
  );
};
