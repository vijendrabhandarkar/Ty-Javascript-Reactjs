function TodoApp () {
    return <div>
        <AddTodo />
        <TodoList />
    </div>
}

function AddTodo () {
    return <div>
        <input />
        <button>Submit</button>
    </div>
}

function TodoList() {
    const todos = [
        {
            text : 'Prayer',
            completed : true
        },
        {
            text : 'Breakfast',
            completed : false
        }
    ]
    return <div>
        {todos.map((todo, index)=>{
            return <Todo key={index} todo={todo} />
        })}
        
    </div>
}
function Todo (props) {
    // const styleValue = {
    //     color : props.todo.completed  ? 'green' : 'red'
    // }
    // const spanElement = props.todo.completed ?
    // <span style={styleValue}>Completed</span> 
    // :   
    // <span style={styleValue}>Not Completed</span> 

    return <div  style={{backgroundColor: 'lightgray', width: '300px'}}>
        <span className="completed" className={props.todo.completed ? 'completed' : 'notCompleted' } >{props.todo.text} </span>
        {/* {spanElement} */}

        {/* {
        props.todo.completed ?
        <span style={{ color: 'green' }}>Completed</span> 
        :   
        <span style={{ color: 'red' }}>Not Completed</span>   
    } */}
        {/* <span style={{ color: props.todo.completed ? 'green' : 'red' }}> 
        {props.todo.completed ? 'Completed':'Not Completed'}</span> */}
        <button>Completed</button>
    </div>
}
ReactDOM.render(<TodoApp />, 
    document.getElementById('container'))