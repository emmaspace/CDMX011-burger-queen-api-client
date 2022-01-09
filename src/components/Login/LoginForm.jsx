import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDataContext } from "../../GetUser";
import Cookies from "universal-cookie/es6";

import "./Login.scss";

export function LoginForm({ saveData, setError }) {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuthDataContext();

  const handleSubmit = () => {
    saveData(email, password)
      .then((res) => {
        // console.log(res)
        onLogin(res);
        const cookies = new Cookies();


        const admin = cookies.get("admin");

        //if (waiter === true) history("/dashboard");
        if (admin === true) history("/kitchen");
        //if (kitchen === true) history("/kitchen");
        //history("dashboard");
      })
      .catch(setError("Contraseña y/o correo inválidos"));
  };
  return (
    <section className="login">
      <h2>Inicio</h2>
      <form className="login__container">
        <section className="identifiers">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escribe tu correo"
          />
        </section>
        <section className="identifiers">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Escribe tu contraseña"
          />
        </section>
        <button
          className="login__btn"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(email, password);
          }}
        >
          Acceder
        </button>
      </form>
    </section>
  );
}
