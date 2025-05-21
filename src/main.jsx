import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import ThemeProvider from './contexts/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
