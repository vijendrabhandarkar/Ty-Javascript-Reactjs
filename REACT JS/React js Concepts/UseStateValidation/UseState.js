function MyApp() {
    const [userData, setuserData] = useState({
        username: '',
        password: ''
    })


    return <form>
        Username :<input type='text' placeholder='Username' />
        Password :<input type='password' placeholder='Username' />
        <button>Submit</button>
    </form>
}
ReactDOM.render(<MyApp />, document.getElementById('container'))