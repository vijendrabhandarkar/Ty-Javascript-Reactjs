const express=require("express")
const exhbs=require("express-handlebars")
const sessions=require("express-session")
const cookieParser=require("cookie-parser")
const { redirect } = require("statuses")

const app=express()
const port=2000

const uname="chandan"
const pwd="chandan"

const oneDay=24*60*60*1000
app.use(sessions({
    secret:"thisisasecretkey",
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge:oneDay
    }
}))

//cookie parser middleware
app.use(cookieParser())

//handlebars set up
app.engine("handlebars",exhbs())
app.set("view engine","handlebars")

//body parser middleware
app.use(express.urlencoded({extended:true}))

app.get("/user",(req,res)=>{
    console.log(req.session);
    if(req.session.userid){
        res.send('session validation  <a href="/logout">Logout</a>')
    }else{
        res.redirect("/")
    }
})

app.post("/login",(req,res)=>{
    const {username,password}=req.body
    if(uname===username && pwd===password){
        console.log(req.session);
        req.session.userid=username;
        res.send("Welcome User <a href='/logout'>Logout</a>")
    }else{
        res.redirect("/")
    }
})

app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

app.get("/",(req,res)=>{
    if (req.session.userid) {
        res.redirect("/user")
    } else {
        res.render("./login.handlebars")
    }
})

app.listen(port,(req,res)=>{
    console.log(`Server is listening on port ${port}`);
})