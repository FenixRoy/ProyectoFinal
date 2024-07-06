import React, { useState } from "react";
import Imagen from "../assets/banner-mobile-TX-L.jpg";
import ImagenProfile from "../assets/avatar4.jpg";

import appFirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  let navigate = useNavigate();

  const functAutentificacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const pass = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, pass);
        return navigate("/lista-laptops");
      } catch (error) {
        alert("Revise si la contraseña tiene mas de 8 caracteres");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, pass);
        return navigate("/lista-laptops");
      } catch (error) {
        alert("El correo o la contraseña son erroneas");
      }
    }
  };

  return (
    <div className="container">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      
      <div className="row">
        {/*columna mas pequeña para formulario de login*/}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImagenProfile} alt="" className="estilo-profile" />
              <form onSubmit={functAutentificacion}>
                <input
                  type="text"
                  placeholder="Ingresar Email"
                  className="cajatexto"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Ingresar contraseña"
                  className="cajatexto"
                  id="password"
                />
                <button className="btnform">
                  {registrando ? "Registrate" : "Inicia Sesion"}
                </button>
              </form>
              <h4 className="texto">
                {registrando ? "Si ya tienes cuenta " : "No tienes cuenta "}
                <button
                  onClick={() => setRegistrando(!registrando)}
                  className="btnswicht"
                >
                  {registrando ? "Inicia Sesion" : "Registrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>

        {/*columna mas grande imagen de login*/}
        <div className="col-md-8">
          <img src={Imagen} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
