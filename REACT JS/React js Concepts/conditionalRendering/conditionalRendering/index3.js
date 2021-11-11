function App(){
    const numbers = ['20px','30px','40px','60px','80px','100px','150px']
    const[num,setNum] = React.useState(0)

    const addNums = ()=>{
      const numberss = num+1;
      if(numbers[numberss]) setNum(numberss);
      else setNum(0)
    }


    return <div>
        <button style={{padding:"12px",fontSize:"22px"}} onClick={addNums}>Click</button>
        <h1 style={{fontSize: numbers[num],textAlign:"center"}}>Font</h1>
    </div>
}

ReactDOM.render(<App />, document.getElementById("output"));
