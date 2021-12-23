import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDataContext } from "../../../GetUser";
import { signOut, getAuth } from "firebase/auth";
// import Swal from "sweetalert2";
// import GetUser from "../../../GetUser";

import "../Styles/Header.scss";

export const LogOut = async () => {
  const auth = getAuth();
  try {
    await signOut(auth)
    console.log("Sali /o/")
    return true
  } catch {
    console.log("Te quedarás aquí por siemmpre >:D")
    return false;
  }
}; 
export default function Header({ setMenu, setShowOrders }) {
  const navigate = useNavigate();
  const { user } = useAuthDataContext();
  
  if (!user) {
    navigate("/");
    console.log(user);
  } 

  function showOnlyKitchen() {
    if (window.location.pathname === "kitchen") {
      document.querySelectorAll(".kitchenOnly");
    } else console.log("ps no esperancita");
  }
  //Swal.fire( 'Bienvenida  ' + GetUser().email )

  showOnlyKitchen();

  return (
    <div className="header__dashboard" LogOut={LogOut}>
      <nav className="header__settings">
        <img
          src="https://i.ibb.co/XX4TXNw/Logo.png["
          alt="Logo de Burger Queen"
        />
        <button
          type="button"
          className="bfBtn"
          onClick={() => {
            setMenu("breakfast");
            setShowOrders(false);
          }}
          >
          Desayunos
        </button>
        <button
          type="button"
          className="bfBtn"
          onClick={() => {
            setMenu("lunch");
            setShowOrders(false);
          }}
          >
          Resto del día
        {
          (user) ? (<p> Holi {user} </p>) : null
        }
        </button>
        <button
          className="bfBtn kitchenOnly"
          onClick={() => setShowOrders(true)}
        >
          Pedidos
        </button>
        <button
          aria-label="Salir"
          className="bfBtn kitchenOnly"
          onClick={()=> LogOut ? navigate("/") : null}
        >
          <img
            src="https://i.ibb.co/60pzZmb/fluent-door-arrow-right-20-filled.png"
            alt="Ícono de puerta"
          />
        </button>
      </nav>
    </div>
  );
}
