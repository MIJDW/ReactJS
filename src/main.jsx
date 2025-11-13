import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { CarritoProvider } from './components/Contexto/CarritoContext.jsx';
import { AuthProvider } from './components/Contexto/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CarritoProvider>
            <App />
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
