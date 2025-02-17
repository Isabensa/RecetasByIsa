// Importam los iconos de menú hamburguesa (FiMenu) y cerrar (FiX) desde react-icons/fi
import { FiMenu, FiX } from "react-icons/fi";

// Componente Header que recibe 'menuAbierto' y 'setMenuAbierto' como props para manejar el estado del menú responsive
function Header({ menuAbierto, setMenuAbierto }) {
  return (
    // Encabezado con fondo rojo, texto blanco, padding y posicionamiento fijo en la parte superior
    <header className="bg-red-600 text-white py-4 px-6 flex justify-between items-center fixed w-full top-0 left-0 z-50">
      
      {/* Logo del sitio */}
      <h1 className="text-xl font-bold">Recetas Deliciosas</h1>

      {/* Menú de navegación visible solo en pantallas grandes (md y superior) */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-200">Inicio</a>
        <a href="#" className="hover:text-gray-200">Recetas</a>
        <a href="#" className="hover:text-gray-200">Contacto</a>
        <a href="#" className="hover:text-gray-200">Nosotros</a>
      </nav>

      {/* Iconos de redes sociales visibles en pantallas grandes */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white text-2xl"><i className="bi bi-facebook"></i></a>
        <a href="#" className="text-white text-2xl"><i className="bi bi-instagram"></i></a>
      </div>

      {/* Botón de menú hamburguesa visible solo en dispositivos pequeños */}
      <button
        className="text-3xl md:hidden focus:outline-none"
        onClick={() => setMenuAbierto(!menuAbierto)} // Alterna el estado de 'menuAbierto'
      >
        {/* Cambia el icono según el estado del menú: FiX (cerrar) si está abierto, FiMenu (hamburguesa) si está cerrado */}
        {menuAbierto ? <FiX className="text-black" /> : <FiMenu />}
      </button>

      {/* Menú desplegable en pantallas pequeñas (solo aparece si 'menuAbierto' es true) */}
      {menuAbierto && (
        <nav className="absolute top-full left-0 w-full bg-red-600 flex flex-col items-center space-y-4 py-6 z-50 shadow-lg">
          <a href="#" className="text-white text-lg">Inicio</a>
          <a href="#" className="text-white text-lg">Recetas</a>
          <a href="#" className="text-white text-lg">Contacto</a>
          <a href="#" className="text-white text-lg">Nosotros</a>

          {/* Iconos de redes sociales dentro del menú desplegable */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white text-2xl"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white text-2xl"><i className="bi bi-instagram"></i></a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
