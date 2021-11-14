const express = require("express");
const exphbs = require("express-handlebars");
const mongoose=require("mongoose")
const app = express();
const port = 2021;

///------>MVC-architecture:Models Views Controllers


//cloud-cluster0 serverDB link
const dbUrl="mongodb+srv://vijendra:vijendra@cluster0.xdfxu.mongodb.net/shopping-app?retryWrites=true&w=majority"

//localDB link
// const dbUrl="mongodb://localhost:27017/shopping-app"
//set up template engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

/* const products = [
  {
    _id: 1,
    pName: "Bag",
    pDesc: "Wearable",
    pPrice: 1200,
  },
]; */

//connection to mongodb database
mongoose.connect(dbUrl,{
  useNewUrlParser:true,
  useUnifiedTopology:true
},(err)=>{
  if (!err) {
    console.log("DB Connection was successful");
  } else {
    console.log("DB Connection failed");
  }
})

//importing products route
const productsRoute=require("./routes/products")


// body parser middleware
app.use(express.urlencoded({ extended: true }));

//router level middleware
app.use("/products",productsRoute)
app.use("/orders",productsRoute)

app.get("/", (req, res) => {
  res.render("./landingpage.handlebars");
});

app.get("/error",(req, res)=>{
  res.status(500).send("Something went wrong")
})
app.listen(port, () => {
  console.log(`Server listening on port ${2021}`);
});

