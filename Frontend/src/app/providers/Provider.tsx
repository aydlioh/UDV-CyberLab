import { ErrorProvider } from './ErrorProvider';
import { NextUIProvider, Spinner } from '@nextui-org/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
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
    </ErrorProvider>
  );
};
