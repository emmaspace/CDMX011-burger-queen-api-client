import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDataContext } from "../../../GetUser";
import { signOut, getAuth } from "firebase/auth";
// import Swal from "sweetalert2";
// import GetUser from "../../../GetUser";

import "../Styles/Header.scss";

export const LogOut = () => {
  const navigate = useNavigate();
  const auth = getAuth();
 signOut(auth)
   .then(() => {
     navigate("/");
     return true
   })
   .catch((error) => {
     return error;
   });
}; 
export default function Header({ setMenu, setShowOrders }) {
  const navigate = useNavigate();
  const { user } = useAuthDataContext();

  if (!user) {
    navigate("/");
  }

  const goToOrders = () => {
    navigate("/orders");
    navigate("/kitchen");
  };

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
        {
          (user) ? (<p> Holi {user.email} </p>) : null
        }
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
          onClick={LogOut}
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
