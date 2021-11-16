const express=require("express")
const router=express.Router()
const productsController=require("../controllers/products")

router.get("/products",productsController.getAllProducts)

router.post("/add-product",productsController.addProduct)
router.put("/edit-product",productsController.editProduct)
router.delete("/delete-product",productsController.deleteProduct)

module.exports=router
