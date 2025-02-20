// Importa 'useState' para manejar el estado y 'motion' de Framer Motion para las animaciones
import { useState } from "react";
import { motion } from "framer-motion";

function Main() {
  // Estado para controlar la visibilidad de la sección de recetas populares
  const [mostrarRecetas, setMostrarRecetas] = useState(false);

  // Lista de recetas con sus nombres e imágenes
  const recipes = [
    { id: 1, name: "Pizza Casera", image: "/recipes/pizza.png" },
    { id: 2, name: "Ensalada César", image: "/recipes/ensaladacesar.png" },
    { id: 3, name: "Pasta Alfredo", image: "/recipes/pastaalfredo.png" },
    { id: 4, name: "Hamburguesa", image: "/recipes/hamburguesa.png" },
  ];

  return (
    // Contenedor principal con fondo pastel, alineación centrada y altura mínima de la pantalla
    <main className="container mx-auto px-4 pt-[20px] bg-pink-100 min-h-screen flex flex-col items-center text-center">
      
      {/* Contenedor principal con la imagen de la cocinera y el texto */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        
        {/* Imagen de la cocinera con animación de flotación */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center md:ml-4" // Corrección: Se usa md:ml-4 para moverla 1 cm más al centro
          initial={{ opacity: 0, x: -50 }} // La imagen comienza desplazada a la izquierda y con opacidad 0
          animate={{
            opacity: 1, // Aparece con opacidad 1
            x: 0, // Se desplaza a su posición original
            y: [0, -10, 0], // Movimiento suave de arriba a abajo (flotación)
          }}
          transition={{
            duration: 2, // La animación dura 2 segundos
            repeat: Infinity, // Se repite indefinidamente
            repeatType: "reverse", // Movimiento fluido en ambas direcciones
          }}
          whileHover={{ scale: 1.05 }} // Aumenta de tamaño al pasar el mouse
        >
          <img
            src="/recipes/cocinera.jpg"
            alt="Cocinera"
            className="max-w-[250px] md:max-w-[280px]" // Control del tamaño de la imagen en diferentes pantallas
          />
        </motion.div>

        {/* Contenedor del texto y el botón */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, x: 50 }} // Comienza desplazado a la derecha
          animate={{ opacity: 1, x: 0 }} // Se anima a su posición original con opacidad 1
          transition={{ duration: 6 }} // Duración de la animación
        >
          {/* Título principal */}
          <h2 className="text-3xl font-bold text-red-600">
            Descubre Nuestras Recetas 🍽️
          </h2>

          {/* Descripción debajo del título */}
          <p className="text-lg text-gray-700 mt-2 leading-relaxed w-3/4">
            Explora nuestra selección de recetas deliciosas, fáciles de preparar y perfectas para cualquier ocasión.
            ¡Déjate inspirar y sorprende a tus seres queridos con platos increíbles!
          </p>

          {/* Botón para mostrar u ocultar las recetas populares */}
          <div className="mt-4">
            <button
              onClick={() => setMostrarRecetas(!mostrarRecetas)} // Alterna el estado de 'mostrarRecetas'
              className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-transform transform duration-300 hover:scale-105 hover:bg-gray-500"
            >
              {mostrarRecetas ? "Ocultar Recetas Populares" : "Ver Recetas Populares"}
            </button>
          </div>

          {/* Sección de recetas populares (se muestra solo si 'mostrarRecetas' es true) */}
          {mostrarRecetas && (
            <motion.section
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3"
              initial={{ opacity: 0 }} // Inicia con opacidad 0
              animate={{ opacity: 1 }} // Aparece con opacidad 1
              transition={{ duration: 4 }} // Duración de la animación
            >
              {/* Mapeo dinámico de la lista de recetas */}
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white p-2 rounded-lg shadow-md">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-24 h-24 mx-auto object-cover rounded-md" // Se mantiene uniforme el tamaño de las imágenes
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
