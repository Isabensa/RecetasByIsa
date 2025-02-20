// Importa 'motion' de la librería 'framer-motion' para agregar animaciones al componente
import { motion } from "framer-motion";

function Footer() {
  return (
    // Pie de página con fondo rojo oscuro, texto blanco, padding vertical y alineación centrada
    <footer className="bg-red-700 text-white py-6 text-center mt-12">
      
      {/* Texto del footer animado con Framer Motion */}
      <motion.p
        className="text-lg font-semibold"
        initial={{ opacity: 0 }} // Al inicio, el texto está completamente invisible
        animate={{ opacity: 1 }} // Luego, la opacidad aumenta a 1 para hacerlo visible
        transition={{ duration: 7 }} // La animación dura 1 segundo
      >
        Recetas Deliciosas - Creado por Isabel 2025.
      </motion.p>
      
    </footer>
  );
}

export default Footer;
