/* eslint-disable no-lone-blocks */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Kitchen from "./components/Kitchen/Kitchen";
import Dashboard from "./components/Dashboard/Dashboard";
import Cookies from "universal-cookie/es6";

const PrivateRoute = ({ children }) => {
  const cookies = new Cookies();
   return cookies.get("email") ? children : <Navigate to ="/" />
};

const Routerito = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        exact
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/kitchen"
        element={
          <PrivateRoute>
            <Kitchen />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
{
  /* <Routes>
    <Route exact path="/" element={<Login />} />
    <Route
      exact
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard userInfo={userInfo} setUserInfo={setUserInfo}/>
        </PrivateRoute>
      }
    />
    <Route
      exact
      path="/kitchen"
      element={
        <PrivateRoute>
          <Kitchen userInfo={userInfo} setUserInfo={setUserInfo}/>
        </PrivateRoute>
      }
    />
  </Routes> */
}

export default Routerito;
