import React, { useState } from "react";
import { useNavigate /* , Link */ } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.jsx";
import "./Login.css";
import errors from "./errors.js";

export function LoginForm() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = (e, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("Sí jalo");
        console.log(user);
        history("dashboard");
      })
      .catch((err) => {
        console.log("No jalo");
        console.log(err.code);
        console.log(errors[err.code]);
        setError("Contraseña y/o correo inválidos");
        console.log(error);
        console.log(setError);
      });
  };
  return (
    <section className="login">
      <h2>Inicio</h2>
        <p>{error}</p>
      <form className="login__container">
        <section className="identifiers">
          <label>Email</label>
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
          <label>Contraseña</label>
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
          onClick={(e) => signIn(e, email, password)}
        >
          Acceder
        </button>
      </form>
    </section>
  );
}
