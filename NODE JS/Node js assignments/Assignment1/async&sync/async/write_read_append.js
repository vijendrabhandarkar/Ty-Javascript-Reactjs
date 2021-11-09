const fs=require("fs")

console.log("Program started");

const writeData=()=>{
    fs.writeFile("demo2/text2.txt","Lets write assignment!!!!!!!!",(fileErr)=>{
        if (fileErr) {
            console.log("File err", fileErr);
        } else {
            console.log("Data written successfully");
            fs.readFile("demo2/text2.txt",(err,data)=>{
                if (err) {
                    console.log("err", err);
                  } else {
                    console.log(data.toString());
                  } 
            })
        }
    })
}

fs.exists("demo2",(exists)=>{
    if(!exists){
        fs.mkdir("demo2",err=>{
            if (err) {
                console.log("the folder is not created", err);
            } else {
                console.log("the folder is created successfully");
                writeData();
            }
        })
    }else{
            //if file exists, then we need to write the data into it
            writeData();
    }
})

console.log("Program ended");