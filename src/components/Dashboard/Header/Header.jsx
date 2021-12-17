import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

import "../Styles/Header.scss";

export default function Header({ setMenu, setShowOrders }) {

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

  const goToOrders = () => {
    navigate("/orders");
    navigate("/kitchen");
  }

  function showOnlyKitchen () {
    if(window.location.pathname === "kitchen"){
      document.querySelectorAll(".kitchenOnly")
    } else(
      console.log('ps no esperancita')
    )
  }

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
          onClick={() => { setMenu("breakfast"); setShowOrders(false)}}
        >
          Desayunos
        </button>
        <button
          type="button"
          className="bfBtn"
          onClick={() => {setMenu("lunch"); setShowOrders(false)}}
        >
          Resto del día
        </button>
        <button className="bfBtn kitchenOnly" onClick={() => setShowOrders(true)}>Pedidos</button>
        <button aria-label="Salir" className="bfBtn kitchenOnly" onClick={LogOut}>
          <img
            src="https://i.ibb.co/60pzZmb/fluent-door-arrow-right-20-filled.png"
            alt="Ícono de puerta"
          />
        </button>
      </nav>
    </div>
  );
}
