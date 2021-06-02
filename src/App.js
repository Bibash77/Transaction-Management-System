import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Dashboard></Dashboard>
    </Router>
  );
}

export default App;
