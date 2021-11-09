// WAP to find geolocation
var x= document.getElementById("location");  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
function getlocation() {  
    if(navigator.geolocation){  
        alert("your browser is supporting Geolocation API")  
    }  
    else  
    {  
        alert("Sorry! your browser is not supporting")  
    }  
}  
console.log(`geolocation -${getlocation()}`);

// (2)
console.log("----------------------------------------------------------------------");

console.log(`location: `,location);
console.log(`history: `,history);
console.log(`navigator: `,navigator);

navigator.geolocation.getCurrentPosition(loc=>{
    console.log(`location: `,loc);
})
