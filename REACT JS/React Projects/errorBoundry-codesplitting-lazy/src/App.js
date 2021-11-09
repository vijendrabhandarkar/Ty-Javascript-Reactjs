import logo from './logo.svg';
import './App.css';
import ErrorBoundry from './errorboundry/ErrorBoundry';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Err1 from './errorboundry/Err1';
import React, { lazy, useState } from 'react';
import { Suspense } from 'react/cjs/react.production.min';

//import PersonDetails from './components/PersonDetails';
//view the Network tab tool to understand the lazy loading
const PersonDetails=lazy(() => import('./components/PersonDetails'));


function App() {
  const [showApp, setShowApp] = useState(false);
  

  const calculate = (n1, n2) => {
    import('./calculator/calculator').then(calculator => {
      console.log('calculator', calculator);
      const total = calculator.add(n1, n2);
      console.log('total', total);
    })
  }


  return (
    <div className="App">
      {/* <ErrorBoundry>
        <Person />
      </ErrorBoundry>
      <Err1 >
        <PersonList />
      </Err1 > */}
      <button onClick={() => { calculate(10, 20) }}>Add</button>
      {
        showApp && <Suspense fallback={<p>Loading...</p>} >
          <PersonDetails />
        </Suspense>
      }
      

      <button onClick={() => { setShowApp(true) }}>Show App</button>
    </div >
  );
}

export default App;
