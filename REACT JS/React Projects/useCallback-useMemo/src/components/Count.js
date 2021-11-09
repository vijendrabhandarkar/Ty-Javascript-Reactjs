import React from 'react'

function Count({ text, count }) {
    console.log(`Rerendering- ${text}`);
    return (
        <div>
            <p>{text}-{count}</p>
        </div>
    )
}

export default React.memo(Count)
