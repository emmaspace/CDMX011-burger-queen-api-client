import auth from "../../firebase";
import React, { useState, Fragment } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from "./LoginForm";
import "./Login.css";

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log(email)
    return true;
  } catch {
    console.log("No jalé :(")
    return false;
  }
};

export function AuthFirebase(email, password) {
  const [error, setError] = useState("");
    
  return (
    <Fragment>
      <LoginForm saveData={signIn} setError={setError}></LoginForm>
      <p id="error">{error}</p>
    </Fragment>
  );
}
