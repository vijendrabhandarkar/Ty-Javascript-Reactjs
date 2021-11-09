console.log(x)
var x=10

function hoist() {
    console.log(y);
    var y=20
    
}
hoist()

console.log(`---------------------------------------------`);
 var a=10;
 function  test () {
     console.log(a);
     var a=40
     
 }
 test()
 
 console.log(`---------------------------------------------------------`);

//Uncaught Typeerror:getId in not Function
// Access Anonymous after declaring and defining
getID()
var getID = function () {
    console.log(`12`)
    
}

console.log(`-----------------------------------------------------------`);

// Uncaught Typeerror:wish in not Function
// Access arrow functions after declaring and defining
wish()
var wish = ( ) =>{
    console.log(`Wish The Same`);

}
