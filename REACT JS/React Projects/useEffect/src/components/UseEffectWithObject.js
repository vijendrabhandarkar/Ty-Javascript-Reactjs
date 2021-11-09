import React, { useEffect, useState } from 'react'

function UseEffectWithObject() {
    const [person, setperson] = useState({
        firstName : 'Ajay',
        age : 30,
        address : {
            city: 'Bangalore',
            pincode : 560068
        }
    })
    useEffect(() => {
        console.log('person', person);
    }, [person])
    const updatePersonName = () => {

        /*  Never ever mutate the state like below and update the 
       state (If the state is updated like below reference of person will
        be same and rerender will not happen)
        person.firstName = 'Vijay'
        setperson(person) */
        

       
        /* Always mutate the state like below 
        1. Take a copy of an state (array/ object) 
        2. DO the modfications to copied object 
        3. set the state with copied object */ 
        
        const personCopy = {...person}
        personCopy.address.city = 'Mumbai'
        personCopy.firstName = 'Vijay'
        setperson(personCopy)

        // OR 

        // setperson({
        //     ...person,
        //     address: {
        //          ...person.address,
        //         city: 'Mumbai',
        //     }
        // })
    }
    return (
        <div>
            <p>Name - {person.firstName}</p>
            <p>Age - {person.age}</p>
            <p>City - {person.address.city}</p>
            <button onClick={updatePersonName}>Update Name</button>
        </div>
    )
}

export default UseEffectWithObject
