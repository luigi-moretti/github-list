import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { ContextProvider } from './system/context'
import AppRoutes from './AppRoutes';
import MenuComponent from './system/components/menu/Menu';
import theme from './theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter>
          <MenuComponent />
          <AppRoutes />
        </BrowserRouter>
        {/* <CssBaseline /> */}
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
