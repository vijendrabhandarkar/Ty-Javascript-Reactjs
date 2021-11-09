import React, { Component } from 'react'

export class MyRef extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();

    }
    componentDidMount() {
        console.log('My Ref', this.myRef);
        this.myRef.current.focus()
    }
    render() {
        return (
            <div>
                <input ref={this.myRef} />
            </div>
        )
    }
}
export default MyRef
