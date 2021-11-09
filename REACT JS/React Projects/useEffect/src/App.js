// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import UseEffectWithArray from './components/UseEffectWithArray';
import UseEffectWithObject from './components/UseEffectWithObject';

function App() {
  const [isRender, setIsRender] = useState(true);
  return (
    <div className="App">
      <button onClick={() => { setIsRender(false) }}>Remove Component</button>
      {isRender && <MyComponent />}
      <UseEffectWithArray />
      <UseEffectWithObject/>
    </div>
  );
}

export default App;
