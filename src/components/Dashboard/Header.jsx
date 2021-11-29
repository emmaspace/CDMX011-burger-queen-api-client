import "./Dashboard.css";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./Dashboard";


export default function Header() {
  const [menu, setMenu] = useState("breakfast");
  
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
    <div LogOut={LogOut}>
      <nav>
        <img src="#" alt="Logo de Burger Queen" />
        <button type="button" className="bfBtn" onClick={() => setMenu("breakfast")}>Desayunos</button>
        <button type="button" className="bfBtn" onClick={() => setMenu("lunch")}>Resto del día</button>
        <button>Pedidos</button>
        <button aria-label="Salir" className="btnSignOut" onClick={LogOut}>
          <img src="#" alt="Ícono de puerta" />
        </button>
      </nav>
      <Dashboard menu={menu}/>
    </div>
  );
}
