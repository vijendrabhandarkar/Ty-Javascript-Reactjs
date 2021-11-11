function MyApp() {
    const [name, setName] = React.useState('Ajit')
    const [isAdmin, setisAdmin] = React.useState(true)
    const updateName = () => {
        console.log(name);
        console.log(isAdmin);
        setName('Guru')
        setisAdmin(false)

    }
    return <div>
        <p>{name}</p>
        <button onClick={updateName}>Update Name</button>
    </div>
}
ReactDOM.render(<MyApp />, document.getElementById('container'))