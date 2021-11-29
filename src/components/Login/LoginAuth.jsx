import React, { useState,  Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import "./Login.css";
import { LoginForm } from "./LoginForm";
//comment

export function AuthFirebase(email, password) {
  const history = useNavigate();
  const [error, setError] = useState("");

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history("header");
    } catch {
      setError("Contraseña y/o correo inválidos")
    }

  };
  return (<Fragment><LoginForm saveData={signIn}></LoginForm><p id="error">{error}</p></Fragment>)
}