function MyApp() {
    const [person, setPerson] = React.useState({
        firstName: 'Ajay',
        lastName: 'K'
    })
    const updateFirstName = () => {
        // Never update state like below while using
        // React Hooks for objects
        // setPerson({
        //     firstName:'Prakash',
        // })
        //  Always update the state like below
        setPerson({
            ...person,
            firstName: 'Prakash'
        })
    }
    return <div>
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        <button onClick={updateFirstName}>Update firstName</button>
    </div>
}
ReactDOM.render(<MyApp />, document.getElementById('container'))