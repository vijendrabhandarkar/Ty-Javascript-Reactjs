class Greet extends React.Component {
    state = {
        firstName: 'Ajay'
    }
    constructor(props) {
        super(props)
        // this.state = {
        //     firstName:'Ajay'
        // }
    }
    render() {
        return <div>
            <h1>{this.state.firstName}</h1>
            <button onClick={() => { this.changeName() }}>Click me</button>
        </div>
    }
    changeName() {

        // Never ever mutate the state like below
        // this.state.firstName ='Vijay'
        console.log('Before State', this.state.firstName);
        this.setState({
            firstName: 'Vijay'
        })
        console.log('After setstate', this.state.firstName);
    }
}
ReactDOM.render(<Greet />, document.getElementById('container'))