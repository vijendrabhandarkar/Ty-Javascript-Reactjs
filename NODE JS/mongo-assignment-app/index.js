const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const port = 2021;

const uname = "vijendra";
const pwd = "vijendra";

const oneDay = 24 * 60 * 60 * 1000;

//session validation
app.use(
  sessions({
    secret: "thisisasecretkey",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: oneDay,
    },
  })
);
///------>MVC-architecture:Models Views Controllers

//cloud-cluster0 serverDB link
const dbUrl =
  "mongodb+srv://vijendra:vijendra@cluster0.xdfxu.mongodb.net/shopping-app?retryWrites=true&w=majority";

//localDB link
// const dbUrl="mongodb://localhost:27017/shopping-app"

//cookie parser middleware
app.use(cookieParser());

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
mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("DB Connection was successful");
    } else {
      console.log("DB Connection failed");
    }
  }
);

//importing products route
let productsRoute;

// body parser middleware
app.use(express.urlencoded({ extended: true }));

app.get("/user", (req, res) => {
  console.log(req.session);
  if (req.session.userid) {
    productsRoute = require("./routes/products");
    //router level middleware
    app.use("/products", productsRoute);
    app.use("/orders", productsRoute);

    res.render("./landingpage.handlebars");
    res.send('session validation  <a href="/logout">Logout</a>');
  } else {
    res.redirect("/");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (uname === username && pwd === password) {
    console.log(req.session);
    req.session.userid = username;
    res.send("Welcome User <a href='/logout'>Logout</a>");
  } else {
    res.redirect("/");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.get("/", (req, res) => {
  if (req.session.userid) {
    res.redirect("/user");
  } else {
    res.render("./login.handlebars");
  }
  // res.render("./landingpage.handlebars");
});

app.get("/error", (req, res) => {
  res.status(500).send("Something went wrong");
});
app.listen(port, () => {
  console.log(`Server listening on port ${2021}`);
});
