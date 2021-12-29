import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CrudProvider } from "./CRUD/CrudContext";
import AuthDataProvider from "./GetUser";
import Routerito from "./router";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      setUserInfo(null);
    } else {
      setUserInfo(user);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <AuthDataProvider>
          <CrudProvider>
            <Routerito userInfo={userInfo} setUserInfo={setUserInfo} />
          </CrudProvider>
        </AuthDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
