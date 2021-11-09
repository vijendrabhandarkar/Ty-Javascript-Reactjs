import React, { useEffect, useState } from 'react'

function UseEffectWithArray() {
    const [birds, setBirds] = useState([]);
    useEffect(() => {
        if (birds.length > 0) {
            console.log('use effect [birds] executed');
        }
    }, [birds])

    const addBird = () => {
        /* Never ever mutate the state like below and update the state
        (if the state is updated like below reference of birds 
        will be same and rerender will not happen)
        birds.push('Peacock')
        setBirds(birds)
        */

        /* Always mutate the state like below
        1. Take a copy of an state (array/object)
        2. Do the modifications to copied object
        3.set the state with the copied object
        */

        const birdsCopy = [...birds];
        birdsCopy.push('peacock');
        setBirds(birdsCopy);
    }
    return (
        <div>
        {console.log('return for array executed')}
            {birds.map((bird, index) => {
                return <p key={index}>{bird} at index {index}</p>
            })}
            <button onClick={addBird}>Add a bird</button>
        </div>
    )
}

export default UseEffectWithArray
