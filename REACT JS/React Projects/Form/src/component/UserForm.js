import React, { useState } from 'react';

function UserForm(props) {
    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        age: null,
    });
    const updateUserData = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value,

        })
    };
    const saveData = (event) => {
        //Do all Validation
        //Once Valid seend the data to App
        props.getUserData(userData)
        //Clearing the form if saved successfully
        setuserData({
            firstName: "",
            lastName: "",
            age: null
        })
    }

    return (
        <div>
            <input
                name="firstName"
                value={userData.firstName}
                onChange={(event) => {
                    updateUserData(event);
                }}
            />
            <button onClick={saveData}>Save</button>
        </div>
    );
}

export default UserForm
