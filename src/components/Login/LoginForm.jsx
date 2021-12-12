import React, { useState } from "react";
import "./Login.css";

export function LoginForm({saveData}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            saveData(email, password)
          }}
        >
          Acceder
        </button>
      </form>
    </section>
  );
}
