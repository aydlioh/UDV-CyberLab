import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </NextUIProvider>
  );
};
