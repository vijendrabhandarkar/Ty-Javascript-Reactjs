console.log("Start of the Programme");

const fs = require('fs')
if(!fs.existsSync('demo1')){
    fs.mkdirSync("demo1")

}
const args = process.argv
console.log(args)

//Writting to the file.
    try{
    fs.appendFileSync("demo1/test.txt","\n"+args[2]);
    }
    catch(err){
      console.log("could not append to the file",err);
    }

    console.log("end of the programme")