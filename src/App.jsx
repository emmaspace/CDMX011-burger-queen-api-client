import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CrudProvider } from "./CRUD/CrudContext";
import AuthDataProvider from "./GetUser";
import Routerito from "./router";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthDataProvider>
          <CrudProvider>
            <Routerito />
          </CrudProvider>
        </AuthDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
