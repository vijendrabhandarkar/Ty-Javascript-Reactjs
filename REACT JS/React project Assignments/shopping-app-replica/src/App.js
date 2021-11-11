import logo from "./logo.svg";
import "./App.css";
import routing from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./navigate/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {routing}
      </div>
    </Router>
  );
}

export default App;
