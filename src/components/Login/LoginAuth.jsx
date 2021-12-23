import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import React, { useState, Fragment } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from "./LoginForm";
import "./Login.css";

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch {
    return false;
  }
};

export function AuthFirebase(email, password) {
  const history = useNavigate();
  const [error, setError] = useState("");
  signIn(email, password)
    ? history("dashboard")
    : setError("Contraseña y/o correo inválidos");
  return (
    <Fragment>
      <LoginForm saveData={signIn}></LoginForm>
      <p id="error">{error}</p>
    </Fragment>
  );
}
