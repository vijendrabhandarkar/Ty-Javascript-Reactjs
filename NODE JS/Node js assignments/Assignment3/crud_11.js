const http =require("http")
const url=require("url")
const products=[
    {
    id:1,
    name:"Bag",
    description:"Used to carry items",
    price:1000
}
]

http.createServer((req,res)=>{
    const reqUrl=url.parse(req.url,true)
    // console.log(reqUrl.pathname);
    const path=reqUrl.pathname
    if(path==="/products"&&req.method==="GET"){
        res.end(JSON.stringify(products))
    }else if(path==="/products"&&req.method==="POST"){
        console.log(reqUrl.query);
        products.push(reqUrl.query)
        //there is one loop hole here, as we can also pass post objects with duplicate ids!!!!!!!!
        res.end(JSON.stringify(products))
    }else if(path==="/products"&&req.method==="PUT"){
        const id=reqUrl.query.id;
        const index=products.findIndex((product)=>{
            return parseInt(product.id)===parseInt(id)
        })
        console.log(index);
        // products.splice(index,1,reqUrl.query)
        // res.end(JSON.stringify(products))
        if(index>=0){
            products.splice(index,1,reqUrl.query)
            res.end(JSON.stringify(products))
        }else{
            res.end("please enter the valied id and then only can be edited")
        }
    }else if(path==="/products"&&req.method==="DELETE"){
        const id=reqUrl.query.id;
        const index=products.findIndex((product)=>{
            return parseInt(product.id)===parseInt(id)
        })
        console.log(index);
        if(index>=0){
            products.splice(index,1)
            res.end(JSON.stringify(products))
        }else{
            res.end("<h1>ERROR</h1>")
        }
    }else {
        res.writeHead(404,{
            'content-type':'text/plain' 
        })
        res.end("Invalied path or invalied HTTP method")
    }
}).listen(2001,()=>{
    console.log("Server is listening on port 2001");
})