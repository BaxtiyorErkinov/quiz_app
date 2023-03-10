import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRouter from '@/router/AppRouter'

import GlobalStyles from "@/styled/GlobalStyles";
import ThemeProvider from '@/theme/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
)
