/* eslint-disable no-lone-blocks */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import auth from "./firebase";
import Login from "./components/Login/Login";
import Kitchen from "./components/Kitchen/Kitchen";
import Dashboard from "./components/Dashboard/Dashboard";
import { useAuthDataContext } from "./GetUser";

const PrivateRoute = ({ children }) => {
  // const { user } = useAuthDataContext();
  const autorizacion = auth.currentUser;
  // return user ? element : <Navigate to ="/" />
  // const finalComponent = user ? element : Login;
  // console.log(user);
  return autorizacion ? children : <Navigate to="/" />;
};

const Routerito = (userInfo, setUserInfo) => {
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
