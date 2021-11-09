console.log('==========find()========='); 
  var array = [50,40,60,70];
  
 
  var found = array.find(function (element) {
      return element > 50 ;
  });

 
  console.log(found);

  var array2 = [10,20,30,40];
  
 
  var list = array2.find(function (element) {
      return element > 20 ;
  });

 
  console.log(list);

  

  var array2 = [2, 7, 8, 9];
  

    var found2 = array2.find(function (element) {
        return element > 4;
    });
  
    console.log(found2);

    var ariya3 = [10, 23, 55, 15];
  

    var ariya = ariya3.find(function (element) {
        return element > 23;
    });
  
    console.log(ariya);

    var ariya4 = [10, 23, 55, 15];
  

    var ariya1 = ariya4.find(function (element) {
        return element > 23;
    });
  
    console.log(ariya1);
    console.log('======findIndex=======');
    var  num = [-10, -0.20, 5, -40, 10];
  
    // function (return element > 0).
    var found3 = num.findIndex(function (element) {
        return element > 0;
    });
  
    // Printing desired values.
   console.log(found3);

   var  rum = [10,20,30];
  
    // function (return element > 0).
    var objs = rum.findIndex(function (element) {
        return element > 10;
    });
  
    // Printing desired values.
   console.log(objs);

   var  rum2 = [10,20,30,40];
  
   // function (return element > 0).
   var objs3 = rum2.findIndex(function (element) {
       return element >10;
   });
 
   // Printing desired values.
  console.log(objs3);

  var  rum2 = [10,20,30,40];
  
  // function (return element > 0).
  var objs3 = rum2.findIndex(function (element) {
      return element >25;
  });

  // Printing desired values.
 console.log(objs3);

   
   

console.log('=======flat()=======');

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[5, 6]]]];

console.log(arr2.flat(2));

const ar = [0, 1, 2, [[[9, 10]]]];

console.log(ar.flat(2));

const a1 = [0, 1, 2, [[[10, 50]]]];

console.log(a1.flat(2));

const a12 = [0, 1, 2, [[[10, 50]]]];

console.log(a12.flat(2));

console.log('=========reverse()========');
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array);
const array3 = array1.reverse();
console.log('array3:', array3);
const array4 = array1.reverse();
console.log('array4:', array4);


// q(2)
console.log('=========hasownpropertiy===========');

const object1 = {};

object1.property1 = 42;


console.log(object1.hasOwnProperty('property1'));

console.log(object1.hasOwnProperty('property2'));


console.log(object1.hasOwnProperty('property3'));
console.log(object1.hasOwnProperty('property4'));
console.log(object1.hasOwnProperty('property5'));

console.log("======toString()=======");
var num=12;
console.log("Output : " + num.toString(2)); 

var n=12;
console.log("Output : " + n.toString(5)); 

var p=50;
console.log("Output : " + p.toString(2)); 

var r=100;
console.log("Output : " + r.toString(2)); 
var s=102;
console.log("Output : " + s.toString(2)); 

console.log("===========object.keys()==========");


 
let emp_details = {
    emp_name: 'Adam',
    emp_salary: 12344,
	   emp_age : 25
} ;
console.log(Object.keys(emp_details));

let stu_details = {
    stu_name: 'rabi',
   
	stu_age : 25
} ;
console.log(Object.keys(stu_details));

let teah_family = {
    teah_name: 'sangram',
    teah_salary: 2124555,
	teah_age : 45
} ;
console.log(Object.keys(teah_family));

console.log('============object.value()==========');
var check = ['x', 'y', 'z'];
        console.log(Object.values(check));

       
        var changes = ['x1', 'y2', 'z3'];
        console.log(Object.values(changes));

        var cars = ['bmw', 'yaudi', 'toyota'];
        console.log(Object.values(cars));



console.log('============object.entries()==============');
var object = { 0: '23', 1: 'geeksforgeeks', 2: 'true' };
       console.log(Object.values(object));
       console.log(Object.entries(object));   

       var object = { 1: '55', 1: 'ilovemyindia', 3: 'true' };
       console.log(Object.values(object));
       console.log(Object.entries(object));
       
       var object = { 0: '55', 1: 'sunrise', 5: 'true' };
       console.log(Object.values(object));
       console.log(Object.entries(object));   
            
       
       
       
console.log('=========object.create()=============');
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = false; // inherited properties can be overwritten
  
  me.printIntroduction();
  const people = {
    isHuman: true,
    conformation: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const you = Object.create(people);
  
  you.name = 'papun'; // "name" is a property set on "me", but not on "person"
  you.isHuman = true; // inherited properties can be overwritten
  
  you.conformation();

  const people2 = {
    isHuman: true,
    conformation2: function() {
      console.log(`love us ${this.name3}. Am I woman? ${this.isHuman}`);
    }
  };
  
  const i1 = Object.create(people2);
  
  i1.name3 = 'kanhu'; // "name" is a property set on "me", but not on "person"
  i1.isHuman = true; // inherited properties can be overwritten
  
  i1.conformation2();

  

  console.log('==========object.assign()===========');
  const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
const ravi = { a: 3, b: 4 };
const sachin = { b: 5, c: 7 };

const returnedravi = Object.assign(ravi, sachin);

console.log(ravi);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedravi);

// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
const ravi1 = { a: 4, b: 5};
const sachin1 = { b: 6, c: 10 };

const returnedravi1 = Object.assign(ravi1, sachin1);

console.log(ravi1);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedravi1);
console.log('=================object.frizee()=======');
const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 42

  const obj2 = {
    prop: 50
  };
  
  Object.freeze(obj2);
  
  obj2.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj2.prop);
  // expected output: 42

  const obj32 = {
    prop: 100
  };
  
  Object.freeze(obj32);
  
  obj32.prop = 95;
  // Throws an error in strict mode
  
  console.log(obj32.prop);
  // expected output: 42
  const obj66 = {
    prop: 96
  };
  
  Object.freeze(obj66);
  
  obj66.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj66.prop);
  // expected output: 42

  const obj67 = {
    prop: 101
  };
  
  Object.freeze(obj67);
  
  obj67.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj67.prop);
  // expected output: 42
  console.log('======================');