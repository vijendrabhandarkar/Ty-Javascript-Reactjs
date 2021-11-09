// 1.named function
function factorial(n) {
    if(n == 0  || n == 1){
    return 1;
}else{
    return n * factorial(n-1);
    
}   
}
var n=5;
answer = factorial(n);
console.log(`Factorail number -`+ answer);

// 2.2.Anonymous Functions
var fact=function(n){
    if(n == 0  || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
        
    }   
}
var n=4;
fact = factorial(n);
console.log(`Factorail number -`+ fact);

// 3.IIFE(Immediate Invoked Functions Expression)

(function factor(n){
    var fact=function(n){
        if(n == 0  || n == 1){
            return 1;
        }else{
            return n * factorial(n-1);
            
        }   
    }
    fact = factorial(n);
    console.log(`Factorail number -`+ fact);
    
})(8);

// 4.Arrows Functions
var fact =(n) =>{

    return(n==1 || n == 0) ? 1 : n * factorial(n-1);
    
}
var n=8
console.log(`Factorail number `+ - fact(n));