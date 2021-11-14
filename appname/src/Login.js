import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useAuthState(getAuth);
  const history = useNavigate();

  const auth = getAuth();

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /*     useEffect(() => {
        if(loading) {

            return;
        }
        if(user) history.replace("/dashboard");
    }, [user, loading]); */
  return (
    <main className="login">
      <form className="login__container">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Escribe tu correo"
        />
        <label for="password">Contraseña</label>
        <input
          id="password"
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Escribe tu contraseña"
        />
        <button
          className="login__btn"
          onClick={() => signIn(email, password)}
        >
          Acceder
        </button>
      </form>
    </main>
  );
}

export default Login;
