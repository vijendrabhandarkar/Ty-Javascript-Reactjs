// 1.Named Functions

function add(n1,n2){
    var sum = n1 + n2 
    return sum
}
var result = add(10,20)
console.log(`Result - ${result}`);

// 2.Anonymous Functions


var subtract = function(n1,n2) {
    return n1 - n2
}

var res = subtract(10,20)
console.log(`Res - ${res}`);


// 3.IIFE(Immediate Invoked Functions Expression)

(function(n1,n2){
    var product = n1 * n2
    console.log(`Product - ${product}`);
})(10,20)


// 4.Arrows Functions (***)
// single line - return statement will added by JS engine 
 var divide =( n1, n2) =>n1/n2
 var d = divide(20,10)
 console.log(`Value ${d}`);


//  single parameter - paranthesis is optional 
var greet = name =>{
return `welcome to the team, ${name}`
}
console.log(greet(`Jhon`));

// No parameter-Pranthesis is mandatory
var printTenNumbers = () => {
    
    
}
for (var i=0; i<10 ;i++){
    console.log(i);
}


var greeting = name => `Welcome to the team ,${name}`
console.log(greeting(`AB`)); 

console.log(`------------------------------------------------`);


function findSquareOfTwoNumbers(n1){
    return function(){
        console.log(`Square of two numbers - ${n1*n1}`);
    }
}
var squareFunction = findSquareOfTwoNumbers(10)
console.log(`squareFunction - `+ squareFunction);
squareFunction()
console.log(`---------------------------------------------------`);

// Currying
// findSquareOfTwoNumbers()()

console.log(`----------------------------------------------------------`);

// callback
function test(callbackFunc) {
    console.log(`test Function`);
    callbackFunc()
    
}
function sample() {
    console.log(`sample Function`);
}
test(sample)
console.log(`-----------------------------------------------------------`);
