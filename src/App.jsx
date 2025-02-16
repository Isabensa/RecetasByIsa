import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className={`font-poppins bg-gray-100 min-h-screen transition-all duration-300`}>
      {/* Pasamos el estado al Header */}
      <Header menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />
      
      {/* Ajustamos el desplazamiento del contenido */}
      <div className={`${menuAbierto ? "mt-40" : "mt-0"} transition-all duration-300`}>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
