import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from '@/router/AppRouter';

import GlobalStyles from '@/styled/GlobalStyles';
import ThemeProvider from '@/theme/ThemeProvider';
import { Provider } from 'react-redux';
import { setupStore } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={setupStore}>
    <ThemeProvider>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </Provider>,
);
