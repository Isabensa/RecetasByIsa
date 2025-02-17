// Importa 'useState' para manejar el estado del menú responsive
import { useState } from "react";

// Importa los componentes principales de la aplicación
import Header from "./Components/Header"; // Encabezado con el menú de navegación
import Main from "./Components/Main"; // Contenido principal
import Footer from "./Components/Footer"; // Pie de página

function App() {
  // Estado para controlar si el menú responsive está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    // Contenedor principal con fuente personalizada, fondo gris claro y altura mínima de la pantalla
    <div className={`font-poppins bg-gray-100 min-h-screen transition-all duration-300`}>
      
      {/* Componente Header: pasamos el estado del menú para que pueda controlarlo */}
      <Header menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />
      
      {/* Contenedor del contenido principal y el footer */}
      <div className={`${menuAbierto ? "mt-40" : "mt-0"} transition-all duration-300`}>
        {/* Componente Main con el contenido principal */}
        <Main />

        {/* Componente Footer con la información del pie de página */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
