
// const PORT=2000
require("dotenv").config()
const PORT=process.env.PORT || 4000

const cors=require("cors")

//DB Connection
require("./config/db")

// product routes
const productsRoutes=require("./routes/products")
//user routes
const userRoutes=require("./routes/users")

const express= require("express")
const app= express()

//cors middleware
app.use(cors())

//body parser middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//route middleware
app.use("/products",productsRoutes)
app.use("/users",userRoutes)

app.get("/test",(req,res)=>{
    res.json({"test":"test the rest service"})
})

//Error handling middleware
app.use((err,req,res,next)=>{
    res.status(500).json({
        error:true,
        message:err.message,
        data:null
    })
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})