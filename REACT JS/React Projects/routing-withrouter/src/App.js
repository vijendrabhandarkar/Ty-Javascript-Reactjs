import './App.css';
import routing from './router';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Contact from './components/contact/Contact';

function App() {

  return (
    <Router>
      <div className="App">
        {routing}
        <Contact />
      </div>
    </Router>
  );
}

export default App;
