const express = require("express");
const router = express.Router();

/* const products = [
  {
    _id: 1,
    pName: "Bag",
    pDesc: "Wearable",
    pPrice: 1200
    
  },
]; */
////
const product = require("../models/product");
const order= require("../models/order")

router.get("/products", async (req, res) => {
  try {
    const products = await product.find().lean();
    res.render("./products.handlebars", {
      products,
    });
  } catch (err) {
    res.redirect("/error");
  }
  /* res.render("./products.handlebars", {
    products,
  }); */
});

router.get("/add-product", (req, res) => {
  res.render("./add-product.handlebars");
});

router.post("/add-product", async (req, res) => {
  console.log("Request Body - ", req.body);
  let { _id, pName, pDesc, pPrice } = req.body;
  // _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  // products.push({ _id, pName, pDesc, pPrice });
  //   res.send("Product Added Successfully");
  try {
    await product.insertMany([
      {
        pName,
        pDesc,
        pPrice,
      },
    ]);
    res.redirect("/products/products");
  } catch (err) {
    console.log(err);
    res.redirect("/error");
  }
});
/* router.post("/add-product", (req, res) => {
  console.log("Request Body - ", req.body);
  let { _id, pName, pDesc, pPrice } = req.body;
  _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  products.push({ _id, pName, pDesc, pPrice });
  //   res.send("Product Added Successfully");
  res.redirect("/products/products");
}); */

router.get("/edit-product/:_id", async (req, res) => {
  //console.log("req.query._id",req.query._id);//undefined
  console.log(req.params._id);
  try {
    const productToEdit = await product
      .findOne({
        _id: req.params._id,
      })
      .lean();
    res.render("./edit-product.handlebars", {
      selectedProduct: productToEdit,
    });
  } catch (error) {
    res.redirect("/error");
  }
  // const index = products.findIndex((product) => {
  //   return parseInt(product._id) === parseInt(req.params._id);
  // });
  // const selectedProduct = products[index];
  // res.render("./edit-product.handlebars", {
  //   selectedProduct,
  // });
  // res.send("Product edit success")
});

router.post("/edit-product", async (req, res) => {
  console.log("Request Body - ", req.body);
  let { _id, pName, pDesc, pPrice } = req.body;
  try {
    await product.updateOne(
      {
        _id,
      },
      {
        $set: {
          pName,
          pDesc,
          pPrice,
        },
      },
      {
        runValidators: true,
      }
    );
    ///////(response sent to: browser will make this redirect request internally-->new request along with: router.post("/edit-product"
    res.redirect("/products/products");
  } catch (error) {
    res.redirect("/error");
  }
  /* let { _id, pName, pDesc, pPrice } = req.body;
  _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  const index = products.findIndex((product) => {
    return parseInt(product._id) === _id;
  });
  products.splice(index, 1, { _id, pName, pDesc, pPrice });
  // products.push({ _id, pName, pDesc, pPrice });
  //   res.send("Product Added Successfully");
  res.redirect("/products/products"); */
});

router.get("/delete-product/:_id", async (req, res) => {
  // console.log(req.query._id);
  console.log(req.params._id);
  const _id = req.params._id;
  try {
    await product.deleteOne({ _id });
    /* await product.deleteMany({
      _id:['618bb53afec5632888c2fe7b','618cf23e6523f1cba0090d48']
    }) */
    res.redirect("/products/products");
  } catch (err) {
    res.redirect("/error");
  }
  /* const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(req.params._id);
  });
  products.splice(index, 1);
  res.redirect("/products/products"); */
  // res.send("Product edit success")
});

// router.get('/search-products',(req,res)=>{
//   res.render('./search-products.handlebars')
// })

router.post("/searched-products", async (req, res) => {
  console.log("Request Body - ", req.body);
  const { txt } = req.body;
  console.log(txt);
  try {
    const searchedProducts = await product
      // .find({ "txt": { $search: txt } })
      .find({$or:[{"pName": new RegExp(txt,"i")},{"pDesc": new RegExp(txt,"i")}]})
      .lean();
    ///////(response sent to: browser will make this redirect request internally-->new request along with: router.post("/edit-product"
    res.render('./searched-products',{
      searchedProducts,
  })
  
  // res.redirect("/products/products");
  } catch (error) {
    console.log("crazy");
    res.redirect("/error");
  }
});


router.get('/orders',async(req,res)=>{
  const products = await product.find().lean(); 
  const orders = await order.find().lean(); 
  const orderedProducts=[...products,...orders]
  console.log(orderedProducts);
  res.render('./orders.handlebars',{
    orderedProducts
  })
})

router.get('/create-order',(req,res)=>{
  res.render('./create-order.handlebars')
})

//create-order has to be redirected to '/orders'
router.post("/create-order", async (req, res) => {
  console.log("Request Body - ", req.body);

  //----------------------------------------------------------------------------------------------
  //while inserting to orders DB we need to insert only the object matching the _id(from product) 




  //----------------------------------------------------------------------------------------------
  res.redirect('/orders/orders')
  /* const { txt } = req.body;
  console.log(txt);
  try {
    const searchedProducts = await product
      // .find({ "txt": { $search: txt } })
      .find({$or:[{"pName": new RegExp(txt,"i")},{"pDesc": new RegExp(txt,"i")}]})
      .lean();
    ///////(response sent to: browser will make this redirect request internally-->new request along with: router.post("/edit-product"
    res.render('./searched-products',{
      searchedProducts,
  })
  
  // res.redirect("/products/products");
  } catch (error) {
    console.log("crazy");
    res.redirect("/error");
  } */
});
module.exports = router;
