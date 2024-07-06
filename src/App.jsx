import { useState } from "react";

//importando modulos de firebase
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importar nuestro componentes
import IniciarSesion from "./views/IniciarSesion";
import ListaLaptops from "./views/ListaLaptops";

import "./App.css";

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>
      { /* usuario ? <Home correoUsuario={usuario.email} /> : <Login /> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<IniciarSesion/>}></Route>
          <Route path="/lista-laptops" exact element={<ListaLaptops correoUsuario={usuario ? usuario.email : ''}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

