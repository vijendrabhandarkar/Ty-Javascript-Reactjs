console.log(this);
console.log(window);

function greet() {
    console.log('This inside greet() ', this);
}
greet()

const test = () => {
    console.log('This inside test() ', this);
}
test()

const person = {
    firstName :'Ajay',
    age : 20,
    lastName :'K',
    getFullName: function() {
        console.log('This inside getFullName  ', this);
        function display() {
            console.log(`This inside display `,  this)
        }
        read = () => {
            console.log('This inside read ', this)
        }
        read()
        display()
        return this.firstName + ' '+ this.lastName
    }
}

person.getFullName()

console.log('---------------------------------------');

// Constructor Function

function Employee (name, age) {
    this.ename = name
    this.eage = age
    this.walk = () => {
        console.log('Walking');
    }
    this.getName = () =>{
        return this.ename
    }
 }

const abhiEmp = new Employee('Abhi', 12)
const ajayEmp = new Employee('Ajay', 22)

abhiEmp.walk()
ajayEmp.walk()
console.log(abhiEmp.getName());
console.log(ajayEmp.getName());

const personData = {
    name : 'Person',
    age : 12,
    getName : function () {
        console.log(this.name);
    },
    
}

const teacher = {
    name : 'Teacher',
    age : 22,
}
teacher.getName = personData.getName
teacher.getName()
personData.getName()
teacher.name = 'AA'
personData.getName()
teacher.getName()
