import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/context';
import ComponentA from './components/ComponentA';
import ComponentD from './components/ComponentD';
import { LoginProvider } from './context/loginContext';
import MyRef from './components/MyRef';
import UseRef from './components/UseRef';
import { useState } from 'react';


function App() {
  const [uname, setuname] = useState('Google')
  const updateUser = () => {
    console.log('loginData', loginData);
    setloginData({
      ...loginData,
      userName: 'Ajay'
    })
  }
  const logoutUser = () => {
    setloginData({
      ...loginData,
      login: false
    })
  }
  const [loginData, setloginData] = useState({
    login: true,
    userName: 'Girish',
    logoutUser: logoutUser
  })


  return (
    <div className="App">
      <UserProvider value={uname}>
        <ComponentA uname={uname} />
        <button onClick={updateUser}>Update User</button>
        <button onClick={() => { setuname('Flipkart') }}>Update</button>
      </UserProvider>

      <LoginProvider value={loginData} >
        <ComponentD />
      </LoginProvider>
      <MyRef />
      <UseRef />
    </div>
  );
}

export default App;
