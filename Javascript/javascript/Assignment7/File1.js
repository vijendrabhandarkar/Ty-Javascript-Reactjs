// example for onChange event
let source = document.querySelector('#item');  
let target = document.querySelector('#show');  
source.addEventListener('change', function () {  
    target.textContent = this.value;  
});  

// example for array Destructuring
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// example for object Destructuring
let person = {
    name1: "Sarah", 
    country: "Nigeria", 
    job: "Developer"
};

const {name1, country, job} = person;

console.log(name1)
console.log(country);
console.log(job);

// example for spread operator of array
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); 

// example for spread operator of object
const user1 = {
    name: 'Jen',
    age: 22
};
  
const clonedUser = { ...user1 };
console.log(clonedUser);

// example for rest operator for array
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

// examplr for rest operator for object
const user = function (name, age, ...hobbies) {
    console.log(name);
    console.log(age);
    console.log(hobbies);
  }
  user('George', 30, 'coding', 'killing zombies');