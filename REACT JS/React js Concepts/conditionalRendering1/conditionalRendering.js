class MyApp extends React.Component {
    state = {
        adminName: 'Girish',
        userName: 'Guru',
        isAdmin: false
    }
    render() {
        const { adminName, userName, isAdmin } = this.state
        let renderData = null
        if (isAdmin) {
            renderData = <div>
                <h1>{adminName}</h1>
                <div>Home</div>
                <div>Login</div>
            </div>
        } else {
            renderData = <div>
                <h1>{userName}</h1>
                <div>Login</div>
            </div>
        }
        return (
            <div>
                {/* {this.state.isAdmin ? <h1>{this.state.adminName}</h1> : <h1>{this.state.userName}</h1>}
                {this.state.isAdmin ? <div><div>Home</div><div>Login</div></div> : <div>Login</div>} */}
                {renderData}
                <button onClick={() => {
                    this.changedAdminUserView()
                }}>{isAdmin ? 'Click here to see user view' : 'Click here to see admin view'}</button>
            </div>
        )
    }
    changedAdminUserView = () => {
        // if (this.state.isAdmin) {
        //     this.setState({
        //         isAdmin: false
        //     })
        // } else {
        //     this.setState({
        //         isAdmin: true
        //     })
        // }
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }
}
ReactDOM.render(<MyApp />, document.getElementById('container'))