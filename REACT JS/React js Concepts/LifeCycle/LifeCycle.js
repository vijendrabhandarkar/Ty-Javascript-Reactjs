class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'mounting phase',
            show: true
        }
        console.log('Parent Constructor executed');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDerivedStateFromProps Executed');
        return state
    }
    render() {
        console.log('Parent render executed');
        return <div>
            <p>{this.state.text}</p>
            <button onClick={() => { this.updateText('updating phase') }}>
                Click
            </button>
            {this.state.show ? <Child /> : null}
        </div>
    }
    updateText(text) {
        this.setState({
            text: text,
            show: false
        })
    }
    shouldComponentUpdate() {
        console.log('Parents shouldComponentUpdate executed');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Parent getSnapshotBeforeUpdate executed ');
        return 'scrolling position'
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Parents componentDidUpdate executed');
        console.log('----------------------------------------');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
        console.log('current State', this.state);
        console.log('-----------------------------------------');
    }
    componentWillUnmount() {
        console.log('Parents componentWilUnmount executed');
    }

    componentDidMount() {
        /* 1.Used to make side effect i.e,making api calls, interacting with DOMException. */
        /* 2.Used to update the state */
        console.log('Parents componentDidMount executed');
    }
}
class Child extends React.Component {
    render() {
        return <div>Child Component</div>
    }
    componentWillUnmount() {
        console.log('Child componentWillMount executed');
    }
}

ReactDOM.render(<Parent />, document.getElementById('container'))