const fs = require("fs");
console.log("Program started");

//mkdirSync("demo1")

//create the folder or directory only if the 'demo' directory is not exists
if(!fs.existsSync('demo1')){
    fs.mkdirSync('demo1')
}
//appendFile will create new file if the file already not present
fs.appendFileSync('demo1/test1.txt',"\nam appending here!!!!")
console.log("Program ended");
