// For each(1)
var arr=[1,2,3,4,5]
var newArray=[];
arr.forEach(item => newArray.push(item+21));
console.log(newArray);

console.log(`---------------------------------------------------`);

// (2)
holidayJoy =["chrimas wreaths","sugar canes","snow angle","elves"]
holidayJoy.forEach((element,index,array)=>{
    console.log(`${index +1 }:${element}`);
})

console.log(`---------------------------------------------------`);

// (3)
newArray = ["Bolacha","biscito","cookie","rosca"]

function funcao(element, index ,array){
    console.log("Element:"+element);
    console.log("Index:"+index);
    console.log("Array:"+array);
}
newArray.forEach(funcao)

console.log(`---------------------------------------------------`);

// (4)
holidays =["15-Aug","26-Jan"]
holidays.forEach((element,index,array)=>{
    console.log(`${index +1 }:${element}`);
})

console.log(`---------------------------------------------------`);

// (5)
var arr=[1,2,3,4,5]
var newArray=[];
arr.forEach(item => newArray.push(item+50));
console.log(newArray);

console.log(`---------------------------------------------------`);

// push(1)

function func(){
    var arr = [34,234, 567 ,4]
    console.log(arr.push(23,45,56));
    console.log("</br>");
    console.log(arr);

}func();

console.log(`---------------------------------------------------`);

// (2)
function func1(){
    var arr = ["A","B","C","D"]
    console.log(arr.push("E","F","G"));
    console.log("</br>");
    console.log(arr);

}func1();


console.log(`---------------------------------------------------`);


// (3)
function func2(){
    var arr = ["Apple","Boll","Cat","Dog"]
    console.log(arr.push("Elephant","Flag","Giraff"));
    console.log("</br>");
    console.log(arr);

}func2();

console.log(`---------------------------------------------------`);

// (4)
function func3(){
    var arr = [58,75,64,95]
    console.log(arr.push(45,87,98));
    console.log("</br>");
    console.log(arr);

}func3();


console.log(`---------------------------------------------------`);



// (5)
function func4(){
    var arr = ["A","B","C","D"]
    console.log(arr.push("E","F","G"));
    console.log("</br>");
    console.log(arr);

}func4();

console.log(`---------------------------------------------------`);

// pop(1)

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console. log(plants. pop());
console. log(plants);

console.log(`---------------------------------------------------`);

// (2)
var Bikes= ['KTM', 'Duccati', 'Hero', 'Honda', 'ninja'];
console. log(Bikes. pop());
console. log(Bikes);

console.log(`---------------------------------------------------`);

// (3)
var Banks= ['Kartnatka', 'citi', 'SBI', 'vijay', 'Baroda'];
console. log(Banks. pop());
console. log(Banks);


console.log(`---------------------------------------------------`);

// (4)
var Books= [1,2,3,4,5];
console. log(Books. pop());
console. log(Books);

console.log(`---------------------------------------------------`);

// (5)
var person= ['jhon', 'smith', 'charlie', 'jsutin', 'chris'];
console. log(person. pop());
console. log(person);



// shift(1)
function func4() { 
      
    
    var array = ["GFG", "Geeks", "for", "Geeks"]; 
  
    
    var value = array.shift(); 
  
    console.log(value);
    console.log("<br />");
     console.log(array);
} 
  
func4();

console.log(`---------------------------------------------------`);

// (2)

var arr=["AngularJS","Node.js","JQuery"];  
var result=arr.shift();  
console.log(result); 

console.log(`---------------------------------------------------`);

// (3)
var arr=["java","sql","web"];  
var result=arr.shift();  
console.log(result);

console.log(`---------------------------------------------------`);
// (4)

var arr=["ktm","hero","honda"];  
var result=arr.shift();  
console.log(result);

console.log(`---------------------------------------------------`);
// (5)
var arr=[1,2,3,4];  
var result=arr.shift();  
console.log(result);

console.log(`---------------------------------------------------`);
// unshift(1)
function func5() { 
      
    // Original array 
    var array = ["GFG", "Geeks", "for", "Geeks"]; 
  
    // Checking for condition in array 
    var value = array.unshift("GeeksforGeeks"); 
  
    console.log(value);
    console.log("<br />"); 
    console.log(array); 
}func5();

console.log(`---------------------------------------------------`);
// (2)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);

console.log(`---------------------------------------------------`);
// (3)

var BIke = ["KTM", "Hero", "splendor", "jupiter"];
BIke.unshift("Honda","ninja");

console.log(BIke);
console.log(`---------------------------------------------------`);
// (4)

var Bank= ["Kartnatka", "SBI"];
Bank.unshift("Vijay","Baroda");

console.log(Bank);
console.log(`---------------------------------------------------`);
// (5)

var number= [10,50,64,48];
number.unshift(1,2);

console.log(number);

console.log(`---------------------------------------------------`);

// includes(1)

var name = [ 'gfg' , 'cse' , 'geeks' , 'portal' ]; 
a = name.includes( 'gfg' )
console.log(name);
console.log(`---------------------------------------------------`);
// (2)

var numbers = [1,2,3,4 ]; 
a = numbers.includes( 1 )
console.log(numbers);

console.log(`--------------------------------------------`);

// (3)
var aplha = [ 'A' , 'B' , 'C' , 'D' ]; 
a = aplha.includes( 'A' )
console.log(aplha);

console.log(`-------------------------------------------------`);
// (4)
var B = [ `java`,`web`]; 
a = B.includes( `web` )
console.log(B);


console.log(`-----------------------------------------------------`);
// (5)

var a = [ 'A' , 'B' , 'C' , 'D' ]; 
a = a.includes( 'A' )
console.log(a);

console.log(`-----------------------------------------------------------`);

// splice(1)
var months =[`jan`,`Feb`,`March`,`April`]
var days=months.splice(2,2)
console.log(days);
console.log(months);

console.log(`-----------------------------------------------------------`);

// (2)
var num =[25,48,78]
var num1=num.splice(2,2)
console.log(num1);
console.log(num);

console.log(`----------------------------------------------------------`);

// (3)
var fruit =[`apple`,`banna`,`orange`]
var fuite=fruit.splice(2,2)
console.log(fuite);
console.log(fruit);


console.log(`-----------------------------------------------------------------`);

// (4)

var months =[`jan`,`Feb`,`March`,`April`]
var days=months.splice(2,2)
console.log(days);
console.log(months);

console.log(`-------------------------------------------------------------------`);
// (5)
var BIKE=[`KTM`,`HONDA`,`HERO`,`SPLENDOR`]
var BIKES=BIKE.splice(2,2)
console.log(BIKES);
console.log(BIKE);

console.log(`--------------------------------------------------------------------`);

// slice(1)
var nums = [1, 23, 45, 56, 64, 102]; 
var midNums = nums. slice(2, -2);
console.log(nums);
console.log(midNums);

console.log(`------------------------------------------------------------------------`);
// (2)

var code = 'I love to code'; 
var love = code. slice(2, 6); 
console.log(love)
console.log(`-------------------------------------------------------`);
// (3)
var code1 = 'I hate to you code'; 
var love1 = code1. slice(2, 6); 
console.log(love1);

console.log(`---------------------------------------------`);
// (4)

var BIKE="KTM  Love Bike";
var BIKES=BIKE.slice(2,6)
console.log(BIKES);

console.log(`------------------------------------------------`);

// (5)

var nums = [1, 23, 45, 56, 64, 102]; 
var midNums = nums. slice(2, -2);
console.log(nums);
console.log(midNums);

console.log(`---------------------------------------------------------`);

// isArray(1)
function func6() {
    console.log(Array.isArray('foobar'));
}

func6();

console.log(`-----------------------------------------------------------`);
// (2)
function func7() {
    console.log(Array.isArray([`2`,`5`]));
}

func7();

console.log(`---------------------------------------------------------`);
// (3)
var nums = [1, 23, 45, 56, 64, 102]; 
console.log(Array.isArray(nums));

console.log(`------------------------------------------------------------------`);
// (4)
var nums = `I love `; 
console.log(Array.isArray(nums));

console.log(`----------------------------------------------------------`);
var nums =`I hate`; 
console.log(Array.isArray(nums));