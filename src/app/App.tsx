import { type FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { MainPage } from '@/pages/mainPage';
import './App.css';

export const App: FC = () => (
  <HelmetProvider>
    <MainPage />
  </HelmetProvider>
);
