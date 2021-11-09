import React from 'react'

function FuncComp(props) {
    return (
        <div>
            {props.uname}
            {console.log('in func component', props.uname)}
        </div>
    )
}

export default React.memo(FuncComp)
