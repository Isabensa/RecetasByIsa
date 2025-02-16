import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-red-700 text-white py-6 text-center mt-12">
      <motion.p
        className="text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       Recetas Deliciosas - Creado por Isabel 2025.
      </motion.p>
      
    </footer>
  );
}

export default Footer;
