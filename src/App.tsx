import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { theme } from './styles/theme';
import PersistGate from './components/PersistGate';
import { Routes } from './routes';
import { GlobalStyle } from './styles/globals';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <PersistGate>
        <Routes />
        <GlobalStyle />
      </PersistGate>
      <ToastContainer autoClose={3000} position="bottom-right" />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
