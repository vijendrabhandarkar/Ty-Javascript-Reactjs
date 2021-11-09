const express=require("express")
const app=express()
const port=2000;

//middleware
const getDate=(req,res,next)=>{
    console.log("Middleware function");
    //next should be called if the request need to be passed to next routes
    const date=Date.now()
    req.requestDate=date
    next()
}
//middleware
app.use(getDate)

//Built-in middleware
app.use(express.static("./public"))
app.use(express.static("./public/products"))
app.use(express.static("./public/images"))

//dummy static path can be added before the file in this way, before the actual
app.use("/static",express.static("./files"))
app.use("/good",express.static("./files"))
app.get('/',(req,res)=>{
    // res.send('Hello World')
    res.send("GET method response"+ new Date(req.requestDate))
})

//Note: use form 'method' attribute to explore post-method in browser
//<form method="POST" action='/'></form>
app.post('/',(req,res)=>{
    console.log('POST METHOD');
    res.send('POST METHOD')
})

app.get('/add',(req,res)=>{
    console.log('ADD GET METHOD');
    res.send('ADD GET METHOD')
})

app.post('/add',(req,res)=>{
    console.log('ADD POST METHOD');
    res.send('ADD POST METHOD')
})

app.get('/getdate',(req,res)=>{
    res.send(`
    <p>Current Date:</p>
    <h1>${new Date(req.requestDate)}</h1>
    <button onclick="alert('hello')">Click</button>`)
})

app.all("*",(req,res)=>{
    throw new Error("The path doesnot exist!!!!!!!!!!!!!")
})

//error handling middleware
app.use((err,req,res,next)=>{
    // res.status(500)
    // res.send(err.message)
    next(err)
})

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})