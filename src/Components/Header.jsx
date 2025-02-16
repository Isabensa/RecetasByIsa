import { FiMenu, FiX } from "react-icons/fi";

function Header({ menuAbierto, setMenuAbierto }) {
  return (
    <header className="bg-red-600 text-white py-4 px-6 flex justify-between items-center fixed w-full top-0 left-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold">Recetas Deliciosas</h1>

      {/* Menú en pantallas grandes */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-200">Inicio</a>
        <a href="#" className="hover:text-gray-200">Recetas</a>
        <a href="#" className="hover:text-gray-200">Contacto</a>
        <a href="#" className="hover:text-gray-200">Nosotros</a>
      </nav>

      {/* Iconos de redes sociales (Siempre visibles) */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white text-2xl"><i className="bi bi-facebook"></i></a>
        <a href="#" className="text-white text-2xl"><i className="bi bi-instagram"></i></a>
      </div>

      {/* Botón de menú hamburguesa en responsive */}
      <button
        className="text-3xl md:hidden focus:outline-none"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <FiX className="text-black" /> : <FiMenu />}
      </button>

      {/* Menú desplegable en responsive */}
      {menuAbierto && (
        <nav className="absolute top-full left-0 w-full bg-red-600 flex flex-col items-center space-y-4 py-6 z-50 shadow-lg">
          <a href="#" className="text-white text-lg">Inicio</a>
          <a href="#" className="text-white text-lg">Recetas</a>
          <a href="#" className="text-white text-lg">Contacto</a>
          <a href="#" className="text-white text-lg">Nosotros</a>

          {/* Iconos de redes sociales en menú desplegable */}
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
