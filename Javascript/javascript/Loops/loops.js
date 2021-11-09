var fruits = [`Apple`,`Banana`,`Orange`]

allfruits=``

for(var fruit of fruits){
    console.log(`Fruit - ${fruit}`);
    allfruits += fruit + `-`
    
}
console.log(`fruits  - ${fruits}`);
console.log(`All fruits `+ allfruits); 
console.log(`----------------------------`);
var fruits = [`Apple`,`Banana`,`Orange`]

var allfruits=``;
var count=0;
for (var items of fruits)
{
    count++
    if(count== fruits.length){
        allfruits += items
    }
    else{
        allfruits += items + `-`
    }
}
console.log(`All fruits `+allfruits);
console.log(`---------for in objects----------------`);
var person = {
    name :`Abhi`,
    age : 22
}

for (var key in person){
    console.log(person[key]);
    console.log(`${key} - ${person[key]}`);
}
for (var key in person){
    if(key === `name`)
    console.log(person[key]);
}

console.log(`---------------------For in Arrays-------------------------`);

var carBrands = [`BMW`,`Farrari`,`Lamborgini`]

for(var index in carBrands){
    console.log(carBrands[index]);
}
console.log(`---------------------------------------------------------------`);

var numbers = [10,20,30,,,,100] 
// it take the empty string and provide the spaces

for (var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log(`------------------------------------------------------------------`);
for(var index in numbers){
    console.log(numbers[index]);
}
   
console.log(`-------------------------------------------------------------------`);

var books = {
    Title : `Web Fundamentals`,
    price: 1200,
}
var Books = ['Web fundamentals',`Javascript`,`Java`]

books[0] = `python`
books[`element`]  = `.Net`

for(var i=0 ; i<books.length; i++){
    console.log(books[i]);
}

console.log(`-----------------------------------------------------------------------`);

for (var index in books){
   console.log(books[index]);
}

console.log(`---------------------------------------------------------------------------`);