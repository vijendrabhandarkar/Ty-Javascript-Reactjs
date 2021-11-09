import { useState } from 'react'
import UserForm from './component/UserForm';
import UserTable from './component/UserTable';

function App() {
  const [userFormData, setuserFormData] = useState([])
  const getUserData = (userData) => {
    console.log(userData);

    // Dont update state like below
    // userFormData.push(userData)
    // setuserFormData(userFormData)

    // Always update state like below array or Object
    // 1.take a copy of state array 
    const userFormDataCopy = [...userFormData]
    //2. Do all the necessary changes /code changes
    userFormDataCopy.push(userData)
    //3. Set the copied array to the state
    setuserFormData(userFormDataCopy)
  }
  return (
    <div className='App'>
      <UserForm getUserData={getUserData} />
      <UserTable userFormData={userFormData} />

    </div>
  )
}

export default App
