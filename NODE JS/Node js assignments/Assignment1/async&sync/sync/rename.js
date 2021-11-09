const fs = require("fs");
console.log("Program started");

//mkdirSync("demo1")

if(fs.existsSync('demo1')){
    fs.renameSync('demo1/test1.txt','demo1/test000.txt')
}

// fs.writeFileSync('demo1/test1.txt',"am writing here!!!!")
console.log("Program ended");
