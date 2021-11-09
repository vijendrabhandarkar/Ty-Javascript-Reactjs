const fs = require("fs");
console.log("Program started");

//mkdirSync("demo1")

fs.exists("demo2",(exists)=>{
    if(exists){
       //if file exists, then we need to rename 
       fs.rename("demo2/text2.txt", "demo2/myFile.txt", (err) => {
           if(err){
            console.log(err);
           }else{
            console.log("Successfully renamed!");
           }   
      }); 
    }else{
        
        console.log("file not existing!!!!!!!!!!");
    }
})

console.log("Program ended");