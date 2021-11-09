import React from 'react'

function Title() {
    console.log('Rendering Title Comp');
    return (
        <div>
            Use Callback hook
        </div>
    )
}

export default React.memo(Title)
