// 1.named function

function fibonacci(num1,num2)
{
    console.log(num1);
    console.log(num2);
    
    for ( var i = 0; i <10; i++) 
    { 
        sum=num1+num2;
        console.log(sum);
        num1=num2;
        num2=sum;
        
    }
    return num2;
    
}
 var temp= fibonacci(0,1)
 console.log(`temp - ${temp}`)

 // 2.Anonymous Function
 var fibonacci = function(num1,num2) {

    console.log(num1);
    console.log(num2);
     for(var i=0; i<5; i++){
         sum=num1+num2
         console.log(sum);
         num1=num2;
         num2=sum;
     }
     

    return num2;
};

var temp=fibonacci(0,1);
console.log(`temp - ${temp}`);


// 3.IIFE(Immediate Invoked Functions Expression)
(function(n1,n2){
    console.log(n1);
    console.log(n2);

    for(var i=0; i<5; i++){
        sum=n1+n2;
        console.log(sum);
        n1=n2;
        n2=sum;
    }

    var temp =sum;
    console.log(`temp - ${temp}`);
})(8,5)

//  4.Arrows Functions
var Numbers = (num1,num2) => {
    
    console.log(num1);
    console.log(num2);
    
    for ( var i = 0; i <5; i++) 
    { 
        sum=num1+num2;
        console.log(sum);
        num1=num2;
        num2=sum;
        
    }
    return num2;
    
}
 var temp= Numbers(0,1)
 console.log(`temp - ${temp}`)
