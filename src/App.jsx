import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import {
  HomePage,
  NotFoundPage,
  ProductPage,
  CartPage,
  CheckoutSuccessPage,
  ContactPage,
} from './pages';
import PageWrapper from './Layout/PageWrapper';

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </PageWrapper>
  );
}

export default App;
