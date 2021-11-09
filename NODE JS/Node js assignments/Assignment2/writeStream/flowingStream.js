console.log("Program started");

const fs=require("fs");

const writeStream=fs.createWriteStream("file1.txt")
console.log(writeStream);
writeStream.write("hello")
writeStream.end("\t world!")

// const writeStream=fs.createWriteStream("file2.txt")
// writeStream.on("open",()=>{
//     console.log("stream opened.........");
// })


console.log("Program ended");
