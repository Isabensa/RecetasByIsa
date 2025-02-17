// Importamos 'StrictMode' de React para detectar posibles problemas en el código durante el desarrollo
import { StrictMode } from 'react';

// Importamos 'createRoot' de ReactDOM para renderizar la aplicación en el DOM
import { createRoot } from 'react-dom/client';

// Importamos el archivo de estilos globales
import './index.css';

// Importamos el componente principal de la aplicación
import App from './App.jsx';

// Seleccionamos el elemento con id 'root' en el HTML y lo usamos como punto de montaje para la app
createRoot(document.getElementById('root')).render(
  // Envolvemos la aplicación en 'StrictMode' para activar verificaciones adicionales en desarrollo
  <StrictMode>
    <App />
  </StrictMode>,
);
