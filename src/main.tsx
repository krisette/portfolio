/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
