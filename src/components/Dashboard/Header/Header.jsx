import "../Styles/Header.scss";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React /* , { useState } */ from "react";
// import Dashboard from "./Dashboard";

export default function Header({ setMenu }) {
  /* const renderBreakfast = () => {
   return  setBreakfast === 'breakfast' ? 'lunch' : 'breakfast';
  } */

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
    <div className="header__dashboard" LogOut={LogOut}>
      <nav className="header__settings">
        <img
          src="https://i.ibb.co/XX4TXNw/Logo.png["
          alt="Logo de Burger Queen"
        />
        <button
          type="button"
          className="bfBtn"
          onClick={() => setMenu("breakfast")}
        >
          Desayunos
        </button>
        <button
          type="button"
          className="bfBtn"
          onClick={() => setMenu("lunch")}
        >
          Resto del día
        </button>
        <button className="bfBtn">Pedidos</button>
        <button aria-label="Salir" className="bfBtn" onClick={LogOut}>
          <img
            src="https://i.ibb.co/60pzZmb/fluent-door-arrow-right-20-filled.png"
            alt="Ícono de puerta"
          />
        </button>
      </nav>
    </div>
  );
}
