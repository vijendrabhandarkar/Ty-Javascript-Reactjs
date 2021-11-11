function Welcome(props) {
    const getData = () => {
        console.log(props.firstName);
    }
    return <h1>
        <button onClick={() => { getData() }}>Click</button>
    </h1>
}
ReactDOM.render(<Welcome firstName='Ajay' />, document.getElementById('container'))