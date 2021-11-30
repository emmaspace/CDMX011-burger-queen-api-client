import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Dashboard/Header"
import Commander from "./components/Dashboard/Commander"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/comanda" element={<Commander />} />
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
