import React, { Component } from 'react'
import withCouter from '../hoc/withCouter';


export class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Cliked {count} times</button>
                <p>User Name - {this.props.userName}</p>
            </div>
        );
    }
}

export default withCouter(ClickCounter, 5)
