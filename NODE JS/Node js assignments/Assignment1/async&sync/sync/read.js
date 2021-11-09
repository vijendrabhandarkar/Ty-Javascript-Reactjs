const fs=require('fs')
console.log("Program started");

if(fs.existsSync('demo1/test1.txt')){
    const data=fs.readFileSync("demo1/test1.txt")
    console.log(data);
    //<Buffer 61 6d 20 77 72 69 74 69 6e 67 20 68 65 72 65 21 21 21 21>
    console.log(data.toString());
    //am writing here!!!!
}

console.log("Program ended");
