import React from "react";
import { LogOut } from "../../Login/LoginAuth";

import "../Styles/Header.scss";


export default function Header({ setMenu, setShowOrders }) {

  function showOnlyKitchen() {
    if (window.location.pathname === "kitchen") {
      document.querySelectorAll(".kitchenOnly");
    } else console.log("ps no esperancita");
  }

  showOnlyKitchen();

  return (
    <div className="header__dashboard">
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
{/*         {
          (user) ? (<p> Holi {user} </p>) : null
        } */}
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
          onClick={()=> LogOut()}
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
