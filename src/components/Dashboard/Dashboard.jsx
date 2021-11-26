import "./Dashboard.css";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Breakfast from "./Breakfast";


export default function Dashboard(email, password) {
  const navigate = useNavigate();
  const auth = getAuth();
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div LogOut={LogOut}>
      <nav>
        <img src="#" alt="Logo de Burger Queen" />
        <button>Desayunos</button>
        <button>Resto del día</button>
        <button>Pedidos</button>
        <button aria-label="Salir" className="btnSignOut" onClick={LogOut}>
          <img src="#" alt="Ícono de puerta" />
        </button>
      </nav>
      <section htmlId="Menú"><Breakfast/></section>
      <section htmlId="Comanda"></section>
    </div>
  );
}
