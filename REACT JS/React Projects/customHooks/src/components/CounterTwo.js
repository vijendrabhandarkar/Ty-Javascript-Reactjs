import React from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(20, 30);
    return (
        <div>
            <p>Count 1 -{count}</p>
            <button onClick={() => { increment(80) }}>Increment</button>
            <button onClick={() => { decrement() }}>Decrement</button>
            <button onClick={() => { reset() }}>Reset</button>
        </div>
    )
}

export default CounterTwo;