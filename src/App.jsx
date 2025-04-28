import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage, NotFoundPage } from './pages';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </PageWrapper>
  );
}

export default App;
