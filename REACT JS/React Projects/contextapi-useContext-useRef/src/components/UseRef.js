import React, { useRef } from 'react'


function UseRef() {
    const inputRef = useRef('demo')
    const focusInput = () => {
        console.log('inputRef', inputRef);
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}>Click</button>
        </div>
    )
}

export default UseRef
