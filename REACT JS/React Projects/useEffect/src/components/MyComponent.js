import React, { useEffect, useState } from 'react'

function MyComponent() {
    const [isAdmin, setIsAdmin] = useState();
    const [name, setName] = useState('');
    //Dont ever use useEffect like below
    // useEffect(() => {
    //     console.log("useEffect executed");
    //     return () => {
    //         //This function will be executed when component will unmount
    //         console.log('Component will unmount.');
    //     }
    // });

    /* Write useEffect like below The below The below function 
    will get executed when component is mounted to the real DOM
    The below function is equivalent to componentDidMount of the class
    component */

    useEffect(() => {
        console.log('Use effect executed when component mounted.');

        /* The below function will get executed before unnmounting
        The component for real DOM
        The below function is equivalent to componentDidMount of the class
            component */

        return () => {
            console.log('first useEffect executed before component is unmounted.');
        }
    }, [])


    useEffect(() => {

        /* The below function will get executed before unnmounting
        The component for real DOM
        The below function is equivalent to componentDidMount of the class
            component */

        return () => {
            console.log('second useEffect executed before component is ummounted');
        }
    }, []);

    /* The below useEffect will get executed whenever name is updated with different value 
    (Note:if name is updated to same value again and again the below useeffect will not get
    execcuted and also rerender will not happen i.e., return statement will also not execute)
    */

    useEffect(() => {
        if(name){
            console.log(`useEffect will only get executed when name is changed ${name}`);
        }
    }, [name])

    useEffect(()=>{
        console.log('Hi I am a normal use effect');
    })


    const updateIsAdmin = () => {
        setIsAdmin(true);
    }

    const updateName = () => {
        setName('Ajay');
    }

    return (
        <div>
            {console.log('return executed')}
            {isAdmin ? 'Admin' : 'user'}
            <button onClick={updateIsAdmin}>Click</button>
            <p>Name - {name}</p>
            <button onClick={updateName}>Update Name</button>
        </div>
    )
}

export default MyComponent
