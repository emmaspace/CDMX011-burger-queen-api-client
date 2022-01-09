import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = (props) => {
  const [user, setUser] = useState(initialAuthData);
  const onLogin = (newAuthData) => setUser(newAuthData);

  

  const authDataValue = useMemo(() => ({ ...user, onLogin, /* LogOut */ }), [user]);
  return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
