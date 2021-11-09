import React, { useReducer } from 'react'
const initialState = {
    firstCounter: 0,
    secondcounter: 0
}
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...prevState,
                firstCounter: prevState.firstCounter + action.payload
            };
        case 'decrement':
            return {
                ...prevState,
                firstCounter: prevState.firstCounter - action.payload
            };
        case 'reset1':
            return {
                ...prevState,
                firstCounter: initialState.firstCounter
            };
        case 'increment2':
            return {
                ...prevState,
                secondcounter: prevState.secondcounter + action.payload
            };
        case 'decrement2':
            return {
                ...prevState,
                secondcounter: prevState.secondcounter - action.payload
            };
        case 'reset2':
            return {
                ...prevState,
                secondcounter: initialState.secondcounter
            };
        default:
            return prevState;
    }
}
function Counter2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <div>
            <div>First Count -{state.firstCounter}</div>
            <button
                onClick={() => {
                    dispatch({ type: 'increment', payload: 5 })
                }}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    dispatch({ type: 'decrement', payload: 5 });
                }}
            >
                Decrement
            </button>

            <button
                onClick={() => {
                    dispatch({ type: 'reset1', payload: 5 });
                }}
            >
                Reset
            </button>

            <div>Second Count -{state.secondcounter}</div>

            <button
                onClick={() => {
                    dispatch({ type: 'increment2', payload: 10 });
                }}
            >Increment</button>
            <button
                onClick={() => {
                    dispatch({ type: 'decrement2', payload: 10 });
                }}
            >Decrement</button>
            <button
                onClick={() => {
                    dispatch({ type: 'reset2', payload: 10 });
                }}
            >Reset</button>
        </div>
    )
}

export default Counter2
