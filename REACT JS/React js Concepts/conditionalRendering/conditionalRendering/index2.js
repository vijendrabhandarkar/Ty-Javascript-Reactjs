function App(){
    const colors =['#fff','Orange','Yellow','Green','RoyalBlue','Violet','Indigo']
    const bColors =['lightblue','lightpink','crimson','lightgrey','lightgreen']
    const[color,setColor] = React.useState(0)
    const[colorr,setBColor] = React.useState(0)
    const changeColor = ()=>{
      const fontColor = color+1;
      const backgroundColor = colorr+1
      if(bColors[backgroundColor]) setBColor(backgroundColor)
      else setBColor(0)
      if(colors[fontColor]) setColor(fontColor);
      else setColor(0)
    }

    return <div style={{background: bColors[colorr],padding:"100px"}}>
    <h1 style={{color: colors[color],fontSize:"100px",letterSpacing:'15px'}}>HELLO</h1>
    <button style={{padding:"10px"}} onClick={changeColor}>Change Font Color</button>

    </div>

}

ReactDOM.render(<App />, document.getElementById("output"));
