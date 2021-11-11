class Parent extends React.Component {

    state = {
        text: ''
    }
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <Child action={this.getDataFromChild.bind(this)} />
            </div>
        )
    }
    // getDataFromChild(childData) {
    //     console.log(childData);
    //     this.setState({
    //         text: childData
    //     })
    getDataFromChild(childData) {
        console.log(('childData', childData));
        // setState is Asynchronous
        // this.setState({
        //     text :childData
        // })
        // console.log('state text' , this.state);//Welcome

        // //Use below ways to update the states always
        this.setState({
            text: childData
        }, () => {
            console.log('state text', this.state);//welcome
        })
    }
}


function Child(props) {
    const str = "Welcome"
    return <div>
        <button onClick={() => { props.action(str) }}>
            Send Data to parent
        </button>
    </div>
}
ReactDOM.render(<Parent />, document.getElementById('container'))