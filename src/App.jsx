import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Dashboard/Header/Header";
import Comanda from "./components/Dashboard/Comanda/Comanda";
import Orders from "./components/Dashboard/Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CrudProvider } from "./CRUD/CrudContext"

function App() {
  return (
    <div className="App">
      <CrudProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/header" element={<Header />} />
            <Route exact path="/comanda" element={<Comanda />} />
            <Route exact path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </CrudProvider>
    </div>
  );
}

export default App;
