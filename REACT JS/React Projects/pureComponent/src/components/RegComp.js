import React, { Component, PureComponent } from 'react'

/* When a class Component is extending PureComponent whenever state or props is changed in shouldComponentUpdate 
method shallow comparison of the state or props will be done and if at all
if there are some changes in state or props the next lifecycle methods of updating phase will be executed]
i.e. render(), getSnapShotBeforeUodate(), componentDidUpdate() ELSE the next lifecycle methods of updating
phase will not be executed and rerender will be avoided.

Note:It does shallow comparison not deep comparison
*/

export class RegComp extends Component {
    render() {
        console.log(this.props.uname);
        return (
            <div>
                {this.props.uname}
            </div>
        )
    }
}

export default RegComp
