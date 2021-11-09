// Array methods
// forEach(1)
const arr1 = [1, 'two',];
arr1.forEach(item => console.log(item));
console.log(`--------------------------`);
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

console.log(`-------------------------------------------------------`);


// Boolean isArray(1)
const books = ['📕', '📙', '📗'];

// Old way
const y = Object.prototype.toString.call(books) === '[object Array]';
console.log(y);

// ✅ Better
const x =Array.isArray(books);
console.log(x);
 console.log(`---------------------------------------------------------`);
// (2)
 function func1() {
    console.log(Array.isArray('foobar'));
}

func1();
console.log(`-----------------------------------------------------------`);

// (3)
function func2() {
    console.log(Array.isArray({}));
}

func2();
console.log(`------------------------------------------------------------`);

// (4)
function func3() {
    console.log(Array.isArray([]));
}

func3();

console.log(`-------------------------------------------------------------------`);

// (5)
function func4() {
    console.log(Array.isArray('foobar'));
}

func4();
console.log(`--------------------------------------------------------------------`);

// Boolean Include(1)
const array1 = [1, 2, 3];

console.log(array1.includes(2));



// (2)
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

// (3)
const pets1 = ['cat', 'dog', 'bat'];
console.log(pets.includes('at'));

// (4)

const bike = ['Honda', 'Hero', 'Ktm'];
console.log(bike.includes(`Honda`));

// (5)
const numbers = [1,2,3,4,5];
console.log(numbers.includes(5));

console.log(`--------------------------------------------------------------------`);

// number push(1)

function func() { 
    var arr = ['GFG', 'gfg', 'g4g']; 
 
    arr.push('GeeksforGeeks'); 
            console.log(arr);
  
} 
func(); 
// (2)
function func() { 
    var arr = ['GFG', 'gfg', 'g4g']; 

    arr.push('GeeksforGeeks'); 
            document.write(arr);
  
} 
func(); 

// (3)
function func1() { 
    var M= [1,2,3]; 
  

    M.push(4); 
            console.log(M);
  
} 
func1(); 

// (4)

function func2() { 
    var x = [4,5,6,7]; 
  
    
    x.push(8); 
            console.log(x);
  
} 
func2();

// (5)
function func3() { 
    var j = [4,5,6,7]; 
  
    
    j.push(40); 
            console.log(j);
  
} 
func3();
console.log(`-------------------------------------------`);

// string pop (1)
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

// (2)

function func4() { 
    var j = [`a`,`b`,`c`,`d`]; 
  
    
    j.pop(); 
            console.log(j);
  
} 
func4();

// (3)

function func5() { 
    var r = [`jhon`,`Mark`]; 
  
    
    r.pop(); 
            console.log(r);
  
} 
func5();

// (4)

function func6() { 
    var j = [`ATM`,`Card`]; 
  
    
    j.pop(); 
            console.log(j);
  
} 
func6();

// (5)

function func7() { 
    var j = [`X`,`D`,`E`]; 
  
    
    j.pop(); 
            console.log(j);
  
} 
func7();
console.log(`-------------------------------------------`);

// string shift(1)
const plants1 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.shift());

// (2)

function func8() { 
    var j = [`a`,`b`,`c`,`d`]; 
  
    
    j.shift(); 
            console.log(j);
  
} 
func8();

// (3)

function func9() { 
    var r = [`jhon`,`Mark`]; 
  
    
    r.shift(); 
            console.log(r);
  
} 
func9();

// (4)

function func10() { 
    var j = [`ATM`,`Card`]; 
  
    
    j.shift(); 
            console.log(j);
  
} 
func10();

// (5)
function func11() { 
    var j = [`X`,`D`,`E`]; 
  
    
    j.shift(); 
            console.log(j);
  
} 
func11();

console.log(`--------------------------------------`);

// numbers unshift(1)
const array2 = [1, 2, 3];

array2.unshift(4, 5);

console.log(array2);
// (2)
const array3 = [10, 20, 30];

array3.unshift(40, 50);

console.log(array3);

// (3)
const array4 = [111, 222, 333];

array4.unshift(444, 555);

console.log(array4);

// (4)
const array5= [156, 256, 356];

array5.unshift(456, 556);

console.log(array5);

// (5)
const array6 = [14, 22, 33];

array6.unshift(44, 55);

console.log(array6);

console.log(`------------------------------------------`);

// array splice(1)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

// (2)

months.splice(4,1,`May`)
console.log(months);

//array slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

// string join
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

// number indexOF
var list = ["apple","banana","orange"]

var index_of_apple = list.indexOf("apple")
console.log(index_of_apple);

// array map
const array10 = [1, 4, 9, 16];


const map1 = array10.map(x => x * 2);

console.log(map1);

// array filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter(word => word.length > 6);

console.log(result1);

console.log(`----------------------------------------------`);
// String method

let str ='hello'
str = str.toUpperCase()
console.log(` toUpperCase ${str}`);

console.log('----------------------------------');
let name = 'rami REEDDY'
name = name.toUpperCase()
console.log(` to UpperCase ${name}`);
console.log('----------------------------------');
let  color = "red"
color = color.toUpperCase()
console.log(` to UpperCase ${color}`);
console.log(' ----------------------------------------- ');

let string = "HELLO"
string = string.toLowerCase()
console.log(`to Lower Case ${string}`);
console.log('----------------------------------');
let username = 'rAMI REDDY'
username =  username.toLowerCase()
console.log(` To Lower Case ${username}`);

console.log('-----------------------------');
let str1 = 'Hello World'
str1 = str1.charAt(6)
console.log(`Character at index 4: ${str1}`);
console.log('-------------------------------------------');
let studentname ='rani'
stu2 = studentname.charAt(2)
console.log(`Character at index 4: ${stu2}`);
console.log('-------------------------------------------');
let colors  = 'White'
colors =colors.charAt(3)
console.log(`Character at Index of ${colors}`);
console.log('-------------------------------------------');
let str3 = "Hello ";
let str4 = "world!";
var res = str3.concat(str4);
console.log(`Concat - ${res}`);
let valuesinclude = str4.includes('o')
let valuesinclude1 = str4.includes('i')
console.log(`include - ${valuesinclude}`);
console.log(`include ${valuesinclude1}`);
let res2 = str4.replace('world','Mumbai')
console.log(`Replaced Values ${res2}`);
console.log('-------------------------------------------');
let string1 = "Nayani"
let string2 = " Lathasree"
let result = string1.concat(string2)
console.log(`concat - ${result}`);
let res1 = string2.replace('Lathasree', 'Divyasree')
console.log(`Replaced value - ${res1}`);
console.log('-------------------------------------------');
let ask = 'How '
let Know= 'was the day?'
let valueinclu1 = Know.includes('was')
console.log(`includes - ${valueinclu1}`);
let value =Know.includes('is')
console.log(`includes - ${value}`);

let exe = ask.concat(Know)
console.log(`Concat ${exe}`);
console.log('---------------------------------');
let rep =  Know.replace('was the day', 'how are you?')
console.log(` Replaced value - ${rep}`)
console.log(`--------------------------------------------`);
const extractedstr = str.substr(1,3)
console.log(`Extrated String - ${extractedstr}`)
console.log('--------------------------------------------');
const extractedstr1 = username.substr(1,3)
console.log(`Extrated String - ${extractedstr1}`)

console.log('--------------------------------------------');
const extractedstr2 = string2.substr(1,3)
console.log(`Extrated String - ${extractedstr2}`)
console.log('-------------------------------------------------');
const extractedString = str.substring(1,3)
console.log(`Extracted String - ${ extractedString } `);
console.log('--------------------------------------------');
const extractedstring2 = name.substring(1,3)
console.log(`Extrated String - ${extractedstring2}`)
console.log('--------------------------------------------');
const extractedstring3 = studentname.substring(1,3)
console.log(`Extrated String - ${extractedstring3}`)