import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import auth from "./firebase";
import Login from "./components/Login/Login";
import Kitchen from "./components/Kitchen/Kitchen";
import Dashboard from "./components/Dashboard/Dashboard";
import { useAuthDataContext } from "./GetUser";

const PrivateRoute = ({ element, ...options }) => {
  //const { user } = useAuthDataContext();
  const user = auth.currentUser;
  return user ? element : <Navigate to ="/" />
/*   const finalComponent = user ? element : Login;
    console.log(user)
  return <Route {...options} element={finalComponent} />; */
};

const Routerito = (userInfo, setUserInfo) => (
  <Routes>
{/*     <Route path="/dashboard" element={<Navigate replace to="/" />} /> */}
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
  </Routes>
);

export default Routerito;
