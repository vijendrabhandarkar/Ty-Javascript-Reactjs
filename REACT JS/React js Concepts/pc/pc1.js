function App(props) {
    const data = ['Chocolate', 'Strawberry', 'Vanilla', 'ButterScotch']
    return <div>
        <Home appName="NetFlix" userName={props.loggedinUser} />
        <List list={data} />
    </div>
}
function List(props) {
    return <div>
        {
            props.list.map((value, index) => {
                return <p key={index}>{value}</p>
            })
        }
    </div>
}

function Home(props) {
    return <div>
        <h1>Home Page {props.appName}</h1>
        <h2>{props.userName}</h2>
    </div>
}
ReactDOM.render(<App loggedinUser="Sujay" />, document.getElementById("container"))

// function App(){
//     const bikes=['ktm','bmw','']

//     return <div>

//     </div>
// }

// function Home(){


//     return <div>


//     </div>
// }

// function List(){


//     return <div>


//     </div>
// }

// ReactDOM.render(<App />,document.getElementById('container'))