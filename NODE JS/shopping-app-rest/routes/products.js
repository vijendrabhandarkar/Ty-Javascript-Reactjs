const express=require("express")
const router=express.Router()
const productsController=require("../controllers/products")
const authorization=require("../middlewares/auth")

router.get("/products",authorization.authorizeUserAdmin,productsController.getAllProducts)

router.post("/add-product",authorization.authorizeAdmin,productsController.addProduct)
router.put("/edit-product",authorization.authorizeAdmin,productsController.editProduct)
router.delete("/delete-product",authorization.authorizeAdmin,productsController.deleteProduct)

module.exports=router
