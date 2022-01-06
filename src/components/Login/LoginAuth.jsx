import Cookies from "universal-cookie/es6";
import React, { useState, Fragment } from "react";
import "./Login.scss";
import { LoginForm } from "./LoginForm";

const cookies = new Cookies();

export const SignIn = async (email, password) => {
  try {
    const userInfo = await ( await fetch("http://localhost:5000/login", {
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({email: email, password: password}),
      method: 'POST'
    })).json();
    console.log(userInfo);
    if(Object.keys(userInfo).length > 0){
      let response=userInfo.user;
      cookies.set('id', response.id, {path: "/"});
      cookies.set('name', response.name, {path: "/"});
      cookies.set('email', response.email, {path: "/"});
      cookies.set('admin', response.role.admin, {path: "/"});
      cookies.set('waiter', response.role.waiter, {path: "/"});
      cookies.set('kitchen', response.role.kitchen, {path: "/"});

      alert(`${response.name} es comehamburgesas`)
    }
    return userInfo.user;
  
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
