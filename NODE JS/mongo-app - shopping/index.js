const express =require('express')
const exphbs=require('express-handlebars')
const mongoose = require("mongoose")
const app=express();
const port=2001;

const dburl = "mongodb+srv://viraj:viraj@cluster0.urn12.mongodb.net/shoppingapp?retryWrites=true&w=majority";

// connect to mongodb database
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{ 
    if(!err){
        console.log('DB connection was successful');
    }else{
        console.log('DB connection failed');
    }
}
);
// importing products route 
const productsRoute = require('./routes/products')

//set up template engine 
app.engine('handlebars',exphbs())
app.set('view engine ', 'handlebars')


//body parser middleware
app.use(express.urlencoded({extended:true}))

// router level midleware
app.use('/products',productsRoute)

app.get('/',(req,res)=>{
    res.render('./landingpage.handlebars')
})

// error message
app.get('/error',(req,res)=>{
    res.status(500).send('Something went wrong')
})

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})