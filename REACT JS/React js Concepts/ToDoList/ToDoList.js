function App(props) {
    return (<div>
        <Header value='Todo List' />
        <AddTodo />
        <TodoList />
    </div>)
}
function Header(props) {
    return <div>
        <h1 id="todoS">{props.value}</h1>
    </div>
}
function AddTodo() {
    return <div>
        <h4 id="addTodoH">Add Todo</h4>
        <input id="addNewTodo" type="Text" placeholder="Add to do" />
        <button id="btn1" >Submit</button>
    </div>
}
function TodoList(props) {
    const data = [
        { list: "This is sample todo", completed: false },
        { list: "2nd todo", completed: false },
        { list: "do something new", completed: false },
        { list: "next todo", completed: false },
    ];
    return (
        <div>
            <List list={data} />
        </div>
    );
}
function List(props) {
    return (
        <div>
            {props.list.map((val, index) => {
                return <SingleList key={index} value={val} />
            })}
        </div>
    );
}
function SingleList(props) {
    const change = () => {
        const cc = <strike>{props.value.text}</strike>
    }
    return (
        <div>
            <p id="lists">{props.value.list}
                {/* {<div id ="btn2">}
            {<button onClick={()=>{change()}}></button>
            <button></button>}
            {</div>} */}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('container'))