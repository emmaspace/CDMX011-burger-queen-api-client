import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { signIn } from "./components/Login/LoginAuth";
import { LogOut } from "./components/Dashboard/Header/Header";


export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = props => {
    const [user, setUser] = useState(initialAuthData);
    
    const auth = getAuth();
    useEffect(() => { 
      onAuthStateChanged(auth, (fbUser) => {
        if (fbUser) {
          setUser(fbUser)
        } else  {
          setUser(null)
        }
      })
    }, [signIn, LogOut]);
  
    const authDataValue = useMemo (() => ({ ...user, signIn, LogOut  }), [user]);
    return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
