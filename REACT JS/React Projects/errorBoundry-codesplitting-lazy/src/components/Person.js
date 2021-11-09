import React from 'react'

function Person(props) {
    return (
        <div>
            Person Component
            {/* To Generate error in the component. */}
            {props.data.splice()}
        </div>
    )
}

export default Person
