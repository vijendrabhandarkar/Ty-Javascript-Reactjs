import React, { PureComponent } from 'react'
import FuncComp from './FuncComp'
import RegComp from './RegComp'

export class ParentComponent extends PureComponent {
    state = {
        uname: 'Ajay',
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                uname: 'Ajay'
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <RegComp uname={this.state.uname} />
                <FuncComp uname={this.state.uname} />
            </div>
        )
    }


}

export default ParentComponent
