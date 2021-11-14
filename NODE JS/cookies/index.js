const express=require("express")
const cookieParser=require("cookie-parser")
const app=express()
const port=2000

//cookie parser middleware
app.use(cookieParser())

///read-cookie
app.get("/read-cookies",(req,res)=>{
    console.log(req.cookies); 
    // req.cookies.myName
    /* if(req.cookies.myName){
        res.send("myName Cookie exists - "+req.cookies.myName)
    }else{
        res.send("Cookie does not exist")
    } */
    // res.send("Read cookies route")
    if(req.cookies){
        res.send("Cookie exists - "+JSON.stringify(req.cookies))
    }else{
        res.send("Cookie does not exist")
    }
})

//creating non-persistent cookie
app.get("/create-cookie",(req,res)=>{
    res.cookie("myName","Vijendra")
    // res.cookie("age","25")
    res.send("Cookies is created")
})

//creating persistent cookie
app.get("/create-pcookie",(req,res)=>{
    res.cookie("email","vijendrabhandarkar0@gmail.com",{
        maxAge:86400000
    })
    res.send("Persistent cookie is created")
})

//creating persistent object cookie
app.get("/create-objcookie",(req,res)=>{
    res.cookie("data",{
        userName:"Vijendra",
        email:"vijendrabhandarkar0@gmail.com"
    },{
        maxAge:86400000
    })
    res.send("Persistent cookie is created")
})

//clear or delete the all cookie
app.get("/clear-objcookie",(req,res)=>{
    for(let cookie in req.cookies){
        res.clearCookie(cookie)
    }
    
    res.send("All cookies is cleared")
})

//clear or delete the cookie
app.get("/clear-cookie",(req,res)=>{
    res.clearCookie("myName")
    res.send("myName cookies is cleared")
})

app.listen(2000,()=>{
    console.log(`Server is listening in port ${port}`);
})
