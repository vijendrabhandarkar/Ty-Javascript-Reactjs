const express = require('express')
const router = express.Router()


const products=[
    {
        _id:1,
        pName:'Bag',
        pDesc:'wearable',
        pPrice:1000
    }
]
const product = require('../models/product')


router.get('/products', async (req,res)=>{
    try{
        const products = await product.find().lean();
    res.render('./products.handlebars',{
        products,
    });
    }catch(err){
        res.redirect("/error")
    }
});
// *******************************************************
// Order-product
router.get('/order-products',(req,res)=>{
    res.render('./order-product.handlebars')
})
// *******************************************************

// *********************************************************************************************************
// search data
// *********************************************************************************************************
router.get('/search-products',(req,res)=>{
    res.render('./search-product.handlebars')
})

router.post('/search-product', async (req, res) => {
    // console.log("req.query -",req.query);
    console.log("req.body -",req.body);
    const { navSearch } = req.body;
    try{
    const products = await product.find({ $text: { $search: navSearch } }).lean();
    // const products = await product.find({ 
    //         pName:navSearch
            
    //         // $search:{
    //         //   navSearch
    //         // }
        
    //  }).lean();
    res.render('./products.handlebars',{
        products,
    })
}catch(err){
    res.redirect('/error')
}
})

// *****************************************************************************************************
router.get('/add-products',(req,res)=>{
    res.render('./add-product.handlebars')
})

router.post('/add-product', async (req,res)=>{
    console.log(req.body);
    let {_id,pName,pDesc,pPrice} = req.body

    pPrice = parseInt(pPrice)
    try{
     await product.insertMany([
    {
      
        pName,
        pDesc,
        pPrice
     }
     ]);
    // res.send('Product Added Successfully')
    res.redirect('/products/products')
    }catch(err){
        console.log(err);
        res.redirect('./error')
    }
});
router.get('/edit-product/:_id', async (req,res)=>{
    // console.log(req.query._id);
    console.log(req.params._id);
    try{
        const productToEdit = await product.findOne({
            _id:req.params._id
        }).lean()

        res.render('./edit-product.handlebars',{
            selectedProduct : productToEdit
        })
    }catch(err){
            res.redirect('/error')
        }
    // res.send("Product edit success")
})
router.post('/edit-product', async(req,res)=>{
    console.log(req.body);
    let{_id,pName,pDesc,pPrice}=req.body
    try{
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
        
    res.redirect('/products/products')

    }catch(err){
        res.redirect('/error')
    }
})

router.get('/delete-product/:_id', async (req,res)=>{
    const _id = req.params._id;
    try{
        await product.deleteOne({
            _id:_id
        })
        // delete many to delete multiple documents\
        // await product.deleteMany({
            // _id:['618cea34364c7778170ad7ae','618cea4a364c7778170ad7b2']
        // })
        res.redirect('/products/products')
    }catch(err){
        res.redirect('/error')
    }
});



module.exports = router;