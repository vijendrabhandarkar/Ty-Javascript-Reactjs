import React, { useState, useCallback } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComp() {
    const [age, setage] = useState(10)
    const [salary, setsalary] = useState(1000)
    /* incrementAge variable will be assigned with function only when the age value is 
    changed (which is passed as a dependency) */
    const incrementAge = useCallback(
        () => {
            setage(age + 1);
        },
        [age],
    )
    const incrementSalary = useCallback(
        () => {
            setsalary(salary + 1000);
        },
        [salary],
    )

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='salary' count={salary}></Count>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComp

