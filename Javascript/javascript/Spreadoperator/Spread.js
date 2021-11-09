const person = {
    pName : `Ajay`,
    age : 30
}
const personCopy = {...person}
console.log(personCopy);
console.log(`---------------------------`);
const numbers =[10,20,40]
const numbersCopy =[...numbers]
console.log(numbersCopy);
console.log(`-------------------------------`);
const person1 = {
    age : 40,
    pName : `Guru`
}
const address = {
    city : `Bengalore`,
    pincode : 560062
}
const personAddress = {...person1, ...address}
console.log(personAddress);



const person2 = {
    color : `white`,
    languages : [`kannada`,`English`]
}
const {age, color}= {...person1, ...person2}
console.log(age);
console.log(color);