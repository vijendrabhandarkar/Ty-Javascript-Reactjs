// primitive types are immutable
let name1 =`Ajay`
let nameCopy=name1
console.log(`name1 - ${name1}`);   /* Ajay*/
console.log(`nameCopy - ${nameCopy}`); /*Ajay*/


/* When we change the data of name1 varaible it will not affect the data of nameCopy variable*/
name1 = `Girish`
console.log(`name1  - ${name1}`);  /*prints Girish*/
console.log(`nameCopy - ${nameCopy}`); /*prints Ajay*/


// Reference types of mutable
// Example for mutable

const person ={
    name :`Vijay`,
    age :30
}

const personCopy = person
console.log(person.name);  /*prints Vijay*/
console.log(personCopy.name);  /*prints Vijay*/

/* When we change the data of person object variable it will affect the data of personCopy variable because 
in memory both person and personCopy variables are pointing to same obejct*/

person.name = `Abhi`
console.log(`name - ${person.name}`);  /*prints abhi*/
console.log(`nameCopy  - ${personCopy.name}`); /*prints abhi*/



console.log(`---------------------------------------`);

// Without changing the pervious value of object
const person1 ={
    name :`Sanjay`,
    age :30
}
const personCopy1 = Object.assign({},person1);
console.log(person1.name);  /*prints Vijay*/
console.log(personCopy1.name);  /*prints Vijay*/


person1.name = `Arun`
console.log(`name - ${person1.name}`);  /*prints abhi*/
console.log(`nameCopy  - ${personCopy1.name}`); /*prints abhi*/


// Make the object behave like immutable
const car = {
    model : 2020,
    brand : `BMW`
}

const carCopy=Object.assign({},car)
console.log(car.model);
console.log(carCopy.model);
console.log(`-----------------------------------------`);
carCopy.model = 2022;
console.log(car.model);
console.log(carCopy.model);



// Example for array mutable

let n = [10,20,30]
let n1 = n;
n = [50];
console.log(`n - ${n}`);
console.log(`n1 - ${n1}`);


// Example for array immutable

let numbers = [100,200,300,400,500]
let numbersCopy = numbers.slice (1)
console.log(`numbers - ${numbers}`);
console.log(`numbersCopy - ${numbersCopy}`);


