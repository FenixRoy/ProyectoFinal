import Home from "../components/Home";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import appFirebase from "../credenciales";

const ListaLaptops = ({ correoUsuario }) => {
  const auth = getAuth(appFirebase);
  const navigate = useNavigate();

  const cerrarSesion = (auth) => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container d-flex justify-content-center">
            <h2 className="flex-fill text-center">Bienvenido {correoUsuario} </h2>

            <button
              className="btn btn-primary"
              onClick={() => cerrarSesion(auth)}
            >
              Logout
            </button>
        </div>
      </nav>
      <Home></Home>
    </>
  );
};

export default ListaLaptops;
