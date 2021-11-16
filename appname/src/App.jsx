import "./App.css";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  console.log("pero que rayos paasa aki aaaaaa");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
