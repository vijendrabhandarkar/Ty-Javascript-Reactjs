// strings are immutable
// toUpperCase method
let str = 'hello'
str = str.toUpperCase()
console.log(`str - ${str}`);

// toLowerCase method
str = str.toLowerCase()
console.log(`str - ${str}`);

// charAt method 
let searchedCharacter = str. charAt(4)
console.log(`searchedCharacter - ${searchedCharacter}`);

// indexOfmethod
const indexOfE = str .indexOf('e')
console.log(`indexOfE  - ${indexOfE}`);


// concat method

const greet =str.concat(',Good Morning')
console.log(`greet - ${greet}`);

// includes method
const includesO = str. includes(`O`)
console.log(`includesO - ${includesO}`);


// replace method

const replaceH = str.replace(`h`,`H`)
console.log(`replaceH - ${replaceH}`);


// replaceAll method
const replaceAllls = str.replaceAll('l','o')
console.log(`repalceAllls - ${replaceAllls}`);


// substr method
const extractedString = str .substr(1, 3)
console.log(`extractedString - ${extractedString}`);

// substring method
const extractedString1 = str. substring(1,3)
console.log(`extractedString1 - ${extractedString1}`);

// trim method
const note = `   Hello Welcome to TY  `
const noteAfterTrim = note.trim()
console.log(`noteAfterTrim - ${noteAfterTrim}`);

// trim Left
const noteAfterTrimLeft = note.trimLeft()
console.log(`noteAfterTrimLeft - ${noteAfterTrimLeft}`);

// trim right
const noteAfterTrimRight = note.trimLeft()
console.log(`noteAfterTrimRight - ${noteAfterTrimRight}`);

// split method
const data =  'hello'
const dataAfterSplit = data.split('')
console.log(`dataAFterSplit - ${dataAfterSplit}`);

// Example -reverse a string 
const reverseString = data.split('').reverse().join('')
console.log(`reverseString -${reverseString}`);

console.log(`---------------------------------------------`);

//Quiz:example for DeepCopy
const items=[{
    id:1,
    name:"Lipstick",
    price: 600
},
{
    id:2,
    name:"Bangles",
    price: 1000
},
{
    id:3,
    name:"Trimmer",
    price: 2300
},
{
    id:4,
    name:"Beard oil",
    price:1000
}]
//use only filter or map  here:
//quiz1:price>800
const itemsWithPriceMoreThan800=items.filter(item=>item.price>800)
console.log(itemsWithPriceMoreThan800);
//name lenght>8
const itemsWithLengthMoreThan8=items.filter(item=>item.name.length>8)
console.log(itemsWithLengthMoreThan8);
// +100 each price of object
const itemsWithPriceIncrementedTo100=items.map(item=>{item.price+=100;
    return item
})
console.log(itemsWithPriceIncrementedTo100);
//convert the name to uppercase
const itemsWithNameUpperCased=items.map(item=>{item.name=item.name.toUpperCase()
    return item
})
console.log(itemsWithNameUpperCased);
console.log(items);
console.log(`------------------Shallow copy-------------------`);
const person = {
    name :`Ajay`,
    age : 40,
    hobbies :[`Cricket`,`Kabaddi`],
    address : {
        city :`bangalore`,
        picode : 560062
    }
}
const p = Object.assign({},person)
person.address.city =`Hyderabad`
console.log(person.address.city);
console.log(p.address.city);

console.log(`-----------------------------------------`);

person.name =`Abhi`
console.log(person.name);
console.log(p.name);

console.log(`------------------------------------------------`);
 const bikes = {
     name:`Honda`,
     price : 15000,
     color : `red`,

 };
 console.log(Object.keys(bikes));