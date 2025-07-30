import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/i18n';
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
