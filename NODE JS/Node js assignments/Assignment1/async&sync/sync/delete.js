const fs = require("fs");
console.log("Program started");

//mkdirSync("demo1")

// if(fs.existsSync('demo1')){
//     fs.unlinkSync("demo1/test1.js")
// }
//to delete the folder/file name, then use:fs.rmSync()
// fs.writeFileSync('demo1/test1.txt',"am writing here!!!!")
//
// fs.rmSync("demo1/test333.txt")

//-----> now this delete statement worked for file
if(fs.existsSync("demo1/test1.txt"))
fs.unlinkSync("demo1/test1.txt");


console.log("Program ended");
