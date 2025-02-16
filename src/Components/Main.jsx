import { useState } from "react";
import { motion } from "framer-motion";

function Main() {
  // Estado para mostrar u ocultar las recetas populares
  const [mostrarRecetas, setMostrarRecetas] = useState(false);

  // Lista de recetas con imágenes
  const recipes = [
    { id: 1, name: "Pizza Casera", image: "/recipes/pizza.png" },
    { id: 2, name: "Ensalada César", image: "/recipes/ensaladacesar.png" },
    { id: 3, name: "Pasta Alfredo", image: "/recipes/pastaalfredo.png" },
    { id: 4, name: "Hamburguesa", image: "/recipes/hamburguesa.png" },
  ];

  return (
    <main className="container mx-auto px-4 pt-[20px] bg-pink-100 min-h-screen flex flex-col items-center text-center">
      {/* Contenedor principal con la imagen y el texto */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        {/* Imagen de la cocinera con animación de flotación */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0], // Movimiento suave arriba y abajo
          }}
          transition={{
            duration: 2,
            repeat: Infinity, // Repetición infinita
            repeatType: "reverse", // Movimiento fluido
          }}
          whileHover={{ scale: 1.05 }} // Efecto de agrandamiento al pasar el mouse
        >
          <img
            src="/recipes/cocinera.jpg"
            alt="Cocinera"
            className="max-w-[250px] md:max-w-[280px]" // Tamaño adecuado para la imagen
          />
        </motion.div>

        {/* Contenedor del texto y el botón */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-red-600">
            Descubre Nuestras Recetas 🍽️
          </h2>
          <p className="text-lg text-gray-700 mt-2 leading-relaxed w-3/4">
            Explora nuestra selección de recetas deliciosas, fáciles de preparar y perfectas para cualquier ocasión.
            ¡Déjate inspirar y sorprende a tus seres queridos con platos increíbles!
          </p>

          {/* Botón centrado debajo del texto */}
          <div className="mt-4">
            <button
              onClick={() => setMostrarRecetas(!mostrarRecetas)}
              className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-transform transform duration-300 hover:scale-105 hover:bg-gray-500"
            >
              {mostrarRecetas ? "Ocultar Recetas Populares" : "Ver Recetas Populares"}
            </button>
          </div>

          {/* Sección de recetas populares más pequeña y uniforme */}
          {mostrarRecetas && (
            <motion.section
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white p-2 rounded-lg shadow-md">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-24 h-24 mx-auto object-cover rounded-md" // Mantener mismas dimensiones
                  />
                  <h3 className="text-md font-semibold mt-1">{recipe.name}</h3>
                </div>
              ))}
            </motion.section>
          )}
        </motion.div>
      </div>
    </main>
  );
}

export default Main;
