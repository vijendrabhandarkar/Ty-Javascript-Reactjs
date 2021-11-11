const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const url = require("url");
const app = express();
const port = 3000;

//set up template engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// let products = [];

//Application-level middleware
const getData = (req, res, next) => {
  console.log("Middleware function to have transparency local variable");
  //next should be called if the request need to be passed to next routes
  // const data=Date.now()
  // req.reqUrl = url.parse(req.url, true);
  // req.path = reqUrl.pathname;
  // req.products=[]
  fs.readFile("./database.json", (err, data) => {
    if (err) {
      // res.writeHead(404, {
      //   "content-type": "text/plain",
      // });
      res.write("File not found\n");
      res.write("Not able to read the data");
      res.send("Not able to read the data");
    } else {
      console.log("Success!!!!!!!");
      console.log("data inside JSON file", data.toString());
      req.products = JSON.parse(data.toString());
      next();
    }
  });
};
//middleware-call
app.use(getData);

// const getData=(dataArray)=>{
//   let products=dataArray
//   return products
// }
// app.use(getData)

// body parser middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./landingpage.handlebars");
});

app.get("/products/products", (req, res) => {
  //read the json object and update it inside local-variable:products
  
      let products = req.products;
      console.log("my req prods", req.products);
      res.render("./products.handlebars", {
        products,
      });
      // console.log("read products from local variable-----", products);
      // res.end();
    
  
});

app.get("/products/add-product", (req, res) => {
  console.log("my req prods in add", req.products);
  let products = req.products;
  res.render("./add-product.handlebars", {
    products,
  });
});

app.post("/products/add-product", (req, res) => {
  let products = req.products;
  console.log("product before adding into local variable!!!", products);
  console.log("Request Body - ", req.body);
  let { _id, pName, pDesc, pPrice } = req.body;
  _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  products.push({ _id, pName, pDesc, pPrice });
  console.log("product after adding into local variable!!!", products);
  //---------------------------------------------------------------
  //now i have already read using Application-level Middleware and now, i have to write the products to the file
  //`products=${JSON.stringify(products)}`
  /* 
  fs.writeFile("./database.js", `products=${JSON.stringify(products)}`, (fileErr) => {
    if (fileErr) {
      console.log("File err", fileErr);
      res.send("File err");
    } else {
      console.log("Data written successfully");
      res.redirect("/products/products");
    }
  });
  */
  fs.writeFile("./database.json", JSON.stringify(products), (fileErr) => {
    if (fileErr) {
      console.log("File err", fileErr);
      res.send("File err");
    } else {
      console.log("Data written successfully");
      res.redirect("/products/products");
    }
  });

  //---------------------------------------------------------------

  //   res.send("Product Added Successfully");
});

app.get("/products/edit-product/:_id", (req, res) => {
  // console.log(req.query._id);
  let products = req.products;
  // console.log("product accessed from local variable!!!", products);
  console.log(req.params._id);
  const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(req.params._id);
  });
  const selectedProduct = products[index];
  res.render("./edit-product.handlebars", {
    selectedProduct,
  });
  // res.send("Product edit success")
});

app.post("/products/edit-product", async (req, res) => {
  let products = req.products;
  console.log("products accessed from local variable!!!", products);
  console.log("Request Body - ", req.body);
  let { _id, pName, pDesc, pPrice } = req.body;
  _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  const index = products.findIndex((product) => {
    return parseInt(product._id) === _id;
  });
  console.log("index:", index);
  products.splice(index, 1, { _id, pName, pDesc, pPrice });
  fs.writeFile("./database.json", JSON.stringify(products), (fileErr) => {
    if (fileErr) {
      console.log("File err", fileErr);
      res.send("File err");
    } else {
      console.log("Data written successfully");
      res.redirect("/products/products");
    }
  });
  console.log(
    "products accessed after editing the local variable!!!",
    products
  );

  // products.push({ _id, pName, pDesc, pPrice });
  //   res.send("Product Added Successfully");
  // res.redirect("/products/products");
});

app.get("/products/delete-product/:_id", (req, res) => {
  let products = req.products;
  console.log(
    "products accessed from local variable before deletion process!!!",
    products
  );
  // console.log(req.query._id);
  console.log(req.params._id);
  const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(req.params._id);
  });
  products.splice(index, 1);
  console.log(
    "products accessed from local variable after deletion process!!!",
    products
  );
  fs.writeFile("./database.json", JSON.stringify(products), (fileErr) => {
    if (fileErr) {
      console.log("File err", fileErr);
      res.send("File err");
    } else {
      console.log("Data written successfully");
      res.redirect("/products/products");
    }
  });
  // res.redirect("/products/products");
  // res.send("Product edit success")
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
