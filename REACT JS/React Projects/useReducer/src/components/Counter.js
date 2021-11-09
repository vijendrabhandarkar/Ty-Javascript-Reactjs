import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (prevState, action) => {
    switch (action) {
        case 'increment':
            return prevState + 1;
        case 'decrement':
            return prevState - 1;
        case 'reset':
            return initialState;
        default:
            return prevState;
    }
}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count-{state}</div>
            <button onClick={() => { dispatch('increment') }} >Increment</button>
            <button onClick={() => { dispatch('decrement') }} >Decrement</button>
            <button onClick={() => { dispatch('reset') }} >Reset</button>
        </div>
    )
}

export default Counter
