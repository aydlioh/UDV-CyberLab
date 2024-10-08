import { ErrorProvider } from './ErrorProvider';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
      <NextUIProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </NextUIProvider>
    </ErrorProvider>
  );
};
