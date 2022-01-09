import Cookies from "universal-cookie/es6";
import React, { useState, Fragment } from "react";
import "./Login.scss";
import { LoginForm } from "./LoginForm";

const cookies = new Cookies();

export const SignIn = async (email, password) => {
  try {
    /* const auth = await ( await fetch("http://localhost:5000/login", {
      headers: { 'content-type': 'application/json'},
      body:JSON.stringify({ email, password }),
      method: 'POST'
    })).json();
    console.log(auth.user);
    if(auth.user.name){
      let response=auth.user; */
    const users = await (
      await fetch("http://localhost:5000/users", {
        headers: { "content-type": "application/json" },
        method: "GET",
      })
    ).json();
    const emailFilter = users.filter((user) => user.email === email);
    const passwordFilter = emailFilter.filter(
      (user) => user.password === password
    );
    console.log(passwordFilter);
    if (passwordFilter.length > 0) {
      let response = passwordFilter[0];
      cookies.set("id", response.id, { path: "/" });
      cookies.set("name", response.name, { path: "/" });
      cookies.set("email", response.email, { path: "/" });
      cookies.set("admin", response.role.admin, { path: "/" });
      cookies.set("waiter", response.role.waiter, { path: "/" });
      cookies.set("kitchen", response.role.kitchen, { path: "/" });

      alert(`${response.name} es comehamburgesas ${cookies.get("email")}`);

      if (cookies.get("admin") === "true") window.location.href = "/dashboard";
      if (cookies.get("waiter") === "true") window.location.href = "dashboard";
      if (cookies.get("kitchen") === "true") window.location.href = "/kitchen";
    } else {
      alert("El usuario o la contraseña no son correctos");
    }
  } catch {
    console.log("no jaló")
    alert("Ocurrió un error, inténtalo más tarde")
  }
};

export const LogOut = () => {
  cookies.remove("id")
  cookies.remove("name")
  cookies.remove("email")
  cookies.remove("admin")
  cookies.remove("waiter")
  cookies.remove("kitchen")

  if(!cookies.get("id")) window.location.href = "/"
}


export function AuthJSON(email, password) {
  const [error, setError] = useState("");
    
  return (
    <Fragment>
      <LoginForm saveData={SignIn} setError={setError}></LoginForm>
      <p id="error">{error}</p>
    </Fragment>
  );
}
