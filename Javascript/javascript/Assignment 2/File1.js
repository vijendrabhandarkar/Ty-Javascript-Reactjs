
var weight=56;
var height= 1.70;
var result=weight/(height**2)
console.log(result);
(result<18.5)?console.log(`underweight`):(result>=18.5)?console.log(`Healthy`):
(result>=24.9 || result<30) ? console.log(`Overweight`):( result >= 30) ? console.log(`suffering obesity`):
console.log(`good`);

console.log(`---------------------------------------`);

var weight=80;
var height=1.75;
var result=weight/(height**2)
 if(result<18.5){
    console.log('Underweight')
 }
 else if(result>=18.5 || result<=25){
    console.log('Healthy')
 }
 else if(result>=24.9|| result<30){
    console.log('overweight')
 }
 else if(result>=30){
    console.log('suffering from obesity')
 }
