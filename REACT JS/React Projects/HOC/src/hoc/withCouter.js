import React, { Component } from 'react'

const withCouter = (WrappedComponent, value = 1) => {
    class EnhancedComponent extends Component {

        state = {
            count: 0
        }

        incrementCount = () => {
            this.setState({
                count: this.state.count + value
            })
        }
        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    //remember this
                    {...this.props}
                />
            )
        }
    }

    return EnhancedComponent;
}



export default withCouter
