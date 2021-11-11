class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.getData = this.getData.bind(this)
        this.greet = this.greet.bind(this)
    }

    render() {
        return <div>
            <h1>Welcome, {this.props.firstName}</h1>
            <button onClick={this.getData.bind(this)}>Click</button>
            <button onClick={this.greet}>Greet</button>
            <button onClick={this.greet}>Greet</button>
            <button onClick={() => { this.getName() }}>Get</button>
            {/*Best way to call methods*/}
            <button onClick={() => { this.getAge('Google') }}>Get Data</button>
        </div>
        //   Best way to call the Methods
    }
    getAge = (data) => {
        console.log(this);
        console.log(data);
    }
    getName() {
        console.log(this);
    }
    greet() {
        console.log(this);
    }
    getData() {
        console.log('Get data executed');
        console.log(this.props.firstName);
    }
}

ReactDOM.render(<Welcome firstName="Ajay" />, document.getElementById('container'))