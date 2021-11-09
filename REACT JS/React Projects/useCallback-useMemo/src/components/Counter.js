import React, { useMemo, useState } from 'react'

function Counter() {
    const [couterOne, setcouterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)


    const incrementOne = () => {
        setcouterOne(couterOne + 1);
    }


    const incementTwo = () => {
        setcounterTwo(counterTwo + 1);
    }

    const reduceFunc = () => {
        const arr = [10, 20, 30, 40];
        const reducer = (prevValue, curValue) => {
            return prevValue + curValue;
        }

        const res = arr.reduce(reducer, 50);
        return res;
    }


    /* The function wrapped inside useMemo will execute only if the dependency
    is getting changed otherwise it will not execute the function rather it will
    return thr memoized value (i.e. , cached or previously returned value even though
    we are calling the function.) */


    const isEven = useMemo(() => {
        console.log('even function executed');
        let i = 0;
        while (i < 200000000)
            i++;

        return couterOne % 2 === 0;

    }, [couterOne])



    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter one - {couterOne}</button>
                <span>{isEven ? 'even' : 'odd'}</span>
            </div>
            <div>Total - {reduceFunc()}</div>
            <button onClick={incementTwo}>Counter Two -{counterTwo}</button>
        </div>
    )
}

export default Counter
