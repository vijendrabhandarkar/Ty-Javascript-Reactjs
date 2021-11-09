const { useState } = require("react")

const useCounter = (initialValue, val) => {
    const [count, setcount] = useState(initialValue)

    const increment = (value) => {
        if (!isNaN(value)) {
            setcount(count + val + value);
        } else {
            setcount(count + val);
        }
    };

    const decrement = () => {
        setcount(count - val);
    };

    const reset = () => {
        setcount(0);
    };

    return [count, increment, decrement, reset]
}

export default useCounter;