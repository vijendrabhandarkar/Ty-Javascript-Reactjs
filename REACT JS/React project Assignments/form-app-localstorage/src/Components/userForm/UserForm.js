import React,{useState} from 'react'
import './UserForm.css'
function UserForm(props) {
    const [firstNameError,setFirstNameError] = useState('')
    const [lastNameError,setLastNameError] = useState('')
    const [ageError,setAgeError] = useState('')


    const [userData, setuserData] = useState({
        firstName:"",
        lastName:"",
        age:''
    })
    
const updateUserData = (event)=>{
    setuserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}
const validateFirstName = () => {
    if(userData.firstName){
        let regex = /^[a-zA-Z]{2,30}$/;
        if(regex.test(userData.firstName)){
            setFirstNameError("")
            return true
        }
        else{
            setFirstNameError("Enter Valid FirstName, only characters allowed")
        }
       
    }
    else{
        setFirstNameError("First Name is Required")
    }
    return false;

}

const validateLastName = () => {
    if(userData.lastName){
        let regex = /^[a-zA-Z]{2,30}$/;
        if(regex.test(userData.lastName)){
            setLastNameError("")
            return true
        }
        else{
            setLastNameError("Enter Valid LastName, only characters allowed")
        }
       
    }
    else{
        setLastNameError("Last Name is Required")
    }
    return false;

}

const validateAge = () => {
    if(userData.age){
        if(userData.age>0 && userData.age<126){
            setAgeError("")
            return true
        }
        else{
            setAgeError("Enter Valid Age, should be between 0-125")
        }
       
    }
    else{
        setAgeError("Age is Required")
    }
    return false;

}
const saveData =(event)=>{
    validateFirstName();
    validateLastName();
    validateAge();
    if(validateFirstName() && validateLastName() && validateAge()){
        props.getUserData(userData);      
    }
    
    //Clearing the form if saved successfully
    setuserData({
        firstName:"",
        lastName:"",
        age: ''
    })
}
    return (
        <div id="formContainer">
        <br/>
        <label className="form-label" htmlFor="">First Name:</label>
        <input id="fName" className="form-control col g-1 align-items-center" type="text" name="firstName" 
        value={userData.firstName} onChange={(event)=>{
            updateUserData(event);
        }}  />
        {firstNameError && <div className="errormsg">{firstNameError}</div>}
        <br />
        <br />
        <label className="form-label" htmlFor="">Last Name:</label>
        <input id="lName" className="form-control" type="text" name="lastName" value={userData.lastName} onChange={(event)=>{
            updateUserData(event);
        }}    />
        {lastNameError && <div className="errormsg">{lastNameError}</div>}
        <br />
        <br />
        <label id="AAG" className="form-label" htmlFor="">Age:</label>
        <input type="number" id="age" className="form-control" type="text" name="age" value={userData.age} onChange={(event)=>{
            updateUserData(event);
        }}   />
        {ageError && <div className="errormsg">{ageError}</div>}

        <br />
        <br />
        <button className="btn-primary" onClick={saveData}>Save</button>
        </div>
    )
}

export default UserForm



