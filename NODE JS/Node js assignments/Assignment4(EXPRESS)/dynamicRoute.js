const express=require("express")
const app=express()
const port=2002;

app.get('/',(req,res)=>{
    // res.send('Hello World')
    res.send("GET method response........")
})

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

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})