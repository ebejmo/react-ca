import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { darkTheme } from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
