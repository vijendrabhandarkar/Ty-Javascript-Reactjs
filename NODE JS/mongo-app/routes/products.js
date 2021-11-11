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
const product=require('../models/product')

router.get("/products", async(req, res) => {
  try{
    const products=await product.find().lean()
    res.render("./products.handlebars",{
      products
    })
  }catch(err){
    res.redirect("/error")
  }
  /* res.render("./products.handlebars", {
    products,
  }); */
});

router.get("/add-product", (req, res) => {
  res.render("./add-product.handlebars");
});

router.post("/add-product", async(req, res) => {
  console.log("Request Body - ", req.body);
  let { _id, pName, pDesc, pPrice } = req.body;
  // _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  // products.push({ _id, pName, pDesc, pPrice });
  //   res.send("Product Added Successfully");
  try{
    await product.insertMany([
      {
        pName,
        pDesc,
        pPrice
      }
    ])
    res.redirect("/products/products");
  }catch(err){
    console.log(err);
    res.redirect("/error")
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

router.get("/edit-product/:_id", async(req, res) => {
  // console.log(req.query._id);
  console.log(req.params._id);
  try {
    const productToEdit=await product.findOne({
      _id: req.params._id
    }).lean()
    res.render("./edit-product.handlebars",{
      selectedProduct:productToEdit
    })
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

router.post("/edit-product", async(req, res) => {
  console.log("Request Body - ", req.body);
  let {_id,pName,pDesc,pPrice}=req.body
  try {
    await product.updateOne({
      _id
    },{
      $set:{
        pName,
        pDesc,
        pPrice
      }
    },{
      runValidators:true
    })
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

router.get("/delete-product/:_id", async(req, res) => {
  // console.log(req.query._id);
  console.log(req.params._id);
  const _id=req.params._id;
  try{
     await product.deleteOne({_id:_id})
    /* await product.deleteMany({
      _id:['618bb53afec5632888c2fe7b','618cf23e6523f1cba0090d48']
    }) */
    res.redirect("/products/products");
  }catch(err){
    res.redirect("/error");
  }
  /* const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(req.params._id);
  });
  products.splice(index, 1);
  res.redirect("/products/products"); */
  // res.send("Product edit success")
});

module.exports = router;
