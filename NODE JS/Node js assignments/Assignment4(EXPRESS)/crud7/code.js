const http = require("http");
const fs = require("fs");
const url = require("url");

// const data = require('./data')

http
  .createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    let products = [];
    if (path === "/products" && req.method === "GET") {
      fs.readFile("./crud7/database.json", (err, data) => {
        if (err) {
          res.writeHead(404, {
            "content-type": "text/plain",
          });
          res.write("File not found\n");
          res.write("Not able to read the data");
          res.end();
        } else {
          res.writeHead(200, {
            "content-type": "text/html",
          });
          res.write(data);
          console.log("data inside JSON file", data);
          products = data;
          console.log("read products from local variable-----", products);
          res.end();
        }
      });
    } else if (path === "/products" && req.method === "POST") {
      console.log(reqUrl.query);

      //there is one loop hole here, as we can also pass post objects with duplicate ids!!!!!!!!
      // res.end(JSON.stringify(products))
      // console.log(products);

      //reused code
      fs.readFile("./crud7/database.json", (err, data) => {
        if (err) {
          res.writeHead(404, {
            "content-type": "text/plain",
          });
          res.write("File not found\n");
          res.write("Not able to read the data");
          res.end();
        } else {
          res.writeHead(200, {
            "content-type": "text/html",
          });
          //   res.write(data);
          console.log("data inside JSON file", data);
          let dataAfterwords = [...JSON.parse(data), reqUrl.query];

          fs.writeFile(
            "./crud7/database.json",
            JSON.stringify(dataAfterwords),
            (fileErr) => {
              if (fileErr) {
                console.log("File err", fileErr);
                res.end("File err");
              } else {
                console.log("Data written successfully");
                products = dataAfterwords;
                console.log("read products from local variable-----", products);
                res.end(JSON.stringify(dataAfterwords));
              }
            }
          );
        }
      });
    } else if (path === "/products" && req.method === "PUT") {
      console.log(reqUrl.query);

      //there is one loop hole here, as we can also pass post objects with duplicate ids!!!!!!!!
      // res.end(JSON.stringify(products))
      // console.log(products);

      //reused code
      fs.readFile("./crud7/database.json", (err, data) => {
        if (err) {
          res.writeHead(404, {
            "content-type": "text/plain",
          });
          res.write("File not found\n");
          res.write("Not able to read the data");
          res.end();
        } else {
          res.writeHead(200, {
            "content-type": "text/html",
          });
          //   res.write(data);
          console.log("data inside JSON file", data.toString());
          products = JSON.parse(data);
          //this existing data has to be edited:
          const id = reqUrl.query.id;
          const index = products.findIndex((product) => {
            return parseInt(product.id) === parseInt(id);
          });
          console.log(index);
          if (index >= 0) {
            products.splice(index, 1, reqUrl.query);
            // res.end(JSON.stringify(products))
            fs.writeFile(
              "./crud7/database.json",
              JSON.stringify(products),
              (fileErr) => {
                if (fileErr) {
                  console.log("File err", fileErr);
                  res.end("File err");
                } else {
                  console.log("Data written successfully");

                  console.log(
                    "read products from local variable-----",
                    products
                  );
                  res.end(JSON.stringify(products));
                }
              }
            );
          } else {
            res.end("please enter the valied id and then only can be edited");
            console.log(
              "read products from local variable---//////////--",
              products
            );
          }
          // let dataAfterwords=[...JSON.parse(data),reqUrl.query]
        }
      });
    } else if (path === "/products" && req.method === "DELETE") {
      console.log(reqUrl.query);

      //there is one loop hole here, as we can also pass post objects with duplicate ids!!!!!!!!
      // res.end(JSON.stringify(products))
      // console.log(products);

      //reused code
      fs.readFile("./crud7/database.json", (err, data) => {
        if (err) {
          res.writeHead(404, {
            "content-type": "text/plain",
          });
          res.write("File not found\n");
          res.write("Not able to read the data");
          res.end();
        } else {
          res.writeHead(200, {
            "content-type": "text/html",
          });
          //   res.write(data);
          console.log("data inside JSON file", data.toString());
          products = JSON.parse(data);
          //this existing data has to be edited:
          const id = reqUrl.query.id;
          const index = products.findIndex((product) => {
            return parseInt(product.id) === parseInt(id);
          });
          console.log(index);
          if (index >= 0) {
            products.splice(index, 1);
            // res.end(JSON.stringify(products))
            fs.writeFile(
              "./crud7/database.json",
              JSON.stringify(products),
              (fileErr) => {
                if (fileErr) {
                  console.log("File err", fileErr);
                  res.end("File err");
                } else {
                  console.log("Data written successfully");

                  console.log(
                    "read products from local variable-----",
                    products
                  );
                  res.end(JSON.stringify(products));
                }
              }
            );
          } else {
            res.end("please enter the valied id and then only can be edited");
            console.log(
              "read products from local variable---//////////--",
              products
            );
          }
          // let dataAfterwords=[...JSON.parse(data),reqUrl.query]
        }
      });
    } else {
      /* else if(req.url===`/?name=${requrl.query.name}&discription=${requrl.query.discription}&price=${requrl.query.price}` && req.method==='POST'){
        let theData ='';
        

            // data.products.push(singleProduct);

            fs.readFile('database.json',(err,data)=>{
                if(err){
                    res.write('Was not able to read the file');
                }else{
                    theData = JSON.parse(data);
                    let singleProduct = {
                id: theData.length +1,
                name:requrl.query.name,
                discription: requrl.query.discription,
                price: requrl.query.price
            }
                    theData.push(singleProduct)
                    fs.writeFile('database.json',JSON.stringify(theData),(err)=>{
            if(err){
                res.write('Was not able to write the data');
                res.end();
            }else{
                res.write(JSON.stringify(theData));
                res.end();
            }
        })
                }
            })

            res.writeHead(200,{
                'content-type':'text/html'
            })
        
    }


    else if(req.url === `/?id=${requrl.query.id}&name=${requrl.query.name}&discription=${requrl.query.discription}&price=${requrl.query.price}` && req.method==='PUT'){
        fs.readFile('database.json',(err,data)=>{
            if(err){
                res.write("Not able to read the file")
                res.end()
            }else{
                let theData = JSON.parse(data);
                
                theData[parseInt(requrl.query.id)-1].name=requrl.query.name
                theData[parseInt(requrl.query.id)-1].discription=requrl.query.discription
                theData[parseInt(requrl.query.id)-1].price = requrl.query.price

                fs.writeFile('database.json',JSON.stringify(theData),(err)=>{
                    if(err){
                        res.write("Not able to write the data")
                        res.end()
                    }else{
                        res.write(JSON.stringify(theData))
                        res.end()
                    }
                })
            }
            
        })
    }

    else if(req.url===`/?id=${requrl.query.id}` && req.method==='DELETE'){
        fs.readFile('database.json',(err,data)=>{
            if(err){
                res.write("Not able to read the file")
                res.end()
            }else{
                let theData = JSON.parse(data);
                // theData.splice((parseInt(requrl.query.id)-1),1)
                theData.forEach((val,index)=>{
                    if(val.id===parseInt(requrl.query.id)){
                        theData.splice(index,1)
                    }
                })

                theData.forEach((val,index)=>{
                    val.id = index+1
                })

                fs.writeFile('database.json',JSON.stringify(theData),(err)=>{
                    if(err){
                        res.write("Not able to write on the file")
                        res.end()
                    }else{
                        res.write(JSON.stringify(theData))
                        res.end()
                    }
                })
            }
        })
    } */
      res.writeHead(404, {
        "content-type": "text/plain",
      });
      res.end("Invalied path or invalied HTTP method");
    }
  })
  .listen(2005, () => {
    console.log("Listening to port 2000");
  });
