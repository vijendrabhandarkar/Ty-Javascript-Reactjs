function MyApp() {
    const [userNameError,setUserNameError] = React.useState(false)
    const [userNameErrorCharacter,setuserNameErrorCharacter] = React.useState(false)

    const [user, setUser] = React.useState({
        userName : '',
        password : ''
    })

    const login = (event) =>{
        event.preventDefault();
        const {userName, password} = user
        console.log(user);
        if(userName) {
            setUserNameError(false)
            if(userName.includes('1')) {
                setuserNameErrorCharacter(true)
            } else {
                setuserNameErrorCharacter(false)
            }
        } else {
            setuserNameErrorCharacter(false)
            setUserNameError(true)
        }
    }
    const updateUserData = (event) =>{
        console.log(event.target.name);
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }
    
    return <form>
        UserName : <input type="text"
        value={user.userName}
        name="userName"
        onChange={(event)=>{updateUserData(event)}} />
        {userNameError &&
        <p style={{ color:'red' }}>Please enter userName</p>}
        {userNameErrorCharacter &&
        <p style={{ color:'red' }}>Only characters are allowed</p>}
        <br/>
        <br/>
        Password : <input type="password"
        value={user.password}
        name="password"
        onChange={(event)=>{updateUserData(event)}} />
        <br/>
        <button onClick={login}>Login</button>
        <p>{user.userName}</p>
        <p>{user.password}</p>
    </form>
}

ReactDOM.render(<MyApp />, document.getElementById('container'))