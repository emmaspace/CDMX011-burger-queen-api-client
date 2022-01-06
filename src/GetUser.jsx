import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { signIn } from "./components/Login/LoginAuth";
import { LogOut } from "./components/Dashboard/Header/Header";
import Cookies from "universal-cookie/es6";
import { Navigate } from "react-router-dom";

export const AuthDataContext = createContext(null);

const cookies = new Cookies();
const initialAuthData = {};

const AuthDataProvider = (props) => {
  const [user, setUser] = useState(initialAuthData);
  const onLogin = (newAuthData) => setUser(newAuthData);

  useEffect(() => {
    if (cookies.get("id")) {
      const id = cookies.get("id");
      const name = cookies.get("name");
      const email = cookies.get("email");
      const waiter = cookies.get("role: waiter");
      const admin = cookies.get("role: admin");
      const kitchen = cookies.get("role: kitchen");

      if (waiter === true) Navigate("/dashboard");
      if (admin === true) Navigate("/kitchen");
      if (kitchen === true) Navigate("/kitchen");

      setUser({ id, name, email, waiter, admin, kitchen });
    } else setUser(initialAuthData);
  }, []);

  const authDataValue = useMemo(() => ({ ...user, onLogin, LogOut }), [user]);
  return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
