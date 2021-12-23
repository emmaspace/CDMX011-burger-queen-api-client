import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Kitchen from "./components/Kitchen/Kitchen";
import Comanda from "./components/Dashboard/Comanda/Comanda";
import Orders from "./components/Dashboard/Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CrudProvider } from "./CRUD/CrudContext";
import AuthDataProvider from "./GetUser"

function App() {
  return (
    <div className="App">
      <CrudProvider>
        <AuthDataProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/kitchen" element={<Kitchen />} />
            <Route exact path="/comanda" element={<Comanda />} />
            <Route exact path="/orders" element={<Orders />} />
          </Routes>
        </Router>
        </AuthDataProvider>
      </CrudProvider>
    </div>
  );
}

export default App;
