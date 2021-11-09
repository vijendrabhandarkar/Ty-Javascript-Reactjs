import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import DataFetchingTwo from './components/DataFetchingTwo';
import { useReducer } from 'react';
import { CountProvider } from './components/CountContext';
import ComponentC from './components/ComponentC';


const initialState = 0;
const reducer = (prevState, action) => {
  switch (action) {
    case 'increment':
      return prevState + 10;
    case 'decrement':
      return prevState - 10;
    case 'reset':
      return initialState;
    default:
      return prevState;
  }
}

function App() {
  

  const [state, dispatch] = useReducer(reducer, initialState)
  return (

    //   {/* <Counter /> */ }
    //     {/* <Counter2 /> */ }

    // <div >
    //   <DataFetchingTwo />
    // </div>

    <CountProvider value={{ state: state, dispatch: dispatch }}>
      <div className="App">
        <ComponentC />
        <button onClick={() => { dispatch('increment') }}>Increment</button>

      </div>
    </CountProvider>

  );
}

export default App;
