import Cookies from "universal-cookie/es6";
import React, { useState, Fragment } from "react";
import "./Login.scss";
import { LoginForm } from "./LoginForm";

export const SignIn = async (email, password) => {
  try {
    const userInfo = await ( await fetch("http://localhost:5000/login", {
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({email: email, password: password}),
      method: 'POST'
    })).json();
    console.log(userInfo);
    return userInfo
  
  } catch {
    console.log("no jaló")
    return null
  }
};

export function AuthJSON(email, password) {
  const [error, setError] = useState("");
    
  return (
    <Fragment>
      <LoginForm saveData={SignIn} setError={setError}></LoginForm>
      <p id="error">{error}</p>
    </Fragment>
  );
}
