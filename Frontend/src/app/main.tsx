import '@fontsource-variable/inter';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './router';
import { Provider } from './providers';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <AppRouter />
    </Provider>
  </StrictMode>
);
