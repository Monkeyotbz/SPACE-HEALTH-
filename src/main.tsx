import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Asegúrate de que la importación sea correcta
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);