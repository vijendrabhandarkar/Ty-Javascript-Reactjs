import React, { Component } from 'react'
import FallBackUI from '../components/FallBackUI';

export class Err1 extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError executed');
        console.log('error', error);
        return { hasError: true }
    }


    componentDidCatch(error, info) {
        console.log('Component Did Catch Executed');
        console.log('e', error);
        console.log('info', info);
    }

    render() {
        if (this.state.hasError) {
            return <p>Oops Something Went Wrong</p>
        } else {
            return this.props.children
        }
    }
}

export default Err1
