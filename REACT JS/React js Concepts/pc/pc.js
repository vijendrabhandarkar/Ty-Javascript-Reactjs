// function App(props) {
//     return <div>
//         <Home appName="NetFlix" userName={props.loggedinUser} />
//     </div>
// }
// function Home(props) {
//     return <div>
//         <h1>Home Page {props.appName}</h1>
//         <h2>{props.userName}</h2>
//     </div>
// }
// ReactDOM.render(<App loggedinUser="Sujay" />, document.getElementById("container"))


function App(props) {
    const appName = "NetFlix"
    const userName = "Sudhanshi"
    return <div>
        <Child heloo={appName} userName={userName} login={props.logginedUser} />
    </div>
}

function Child(props) {
    return <div>
        <h2>Child {props.heloo}</h2>
        <h1>Beti {props.userName}</h1>
        <h3>Lelo {props.login}</h3>
    </div>
}
ReactDOM.render(<App logginedUser="Chudi Kali" />, document.getElementById('container'))