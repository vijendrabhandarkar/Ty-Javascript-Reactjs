// setTimeOut
console.log("---------------------- 1 ----------------------");

const test1 = () => setTimeout(() => console.log("I am Late"), 2000);

function test2() {
  return console.log("I am First");
}

test1();
test2();


console.log("--------------------- 2 -----------------------");
const classA = ["A", "B", "C"];
const classB = [1, 2, 3];
const result = () =>
  setTimeout(
    () => console.log(`ClassA: `, classA),
    1000,
    console.log(`ClassB: `, classB)
  );
result();

console.log("-------------------- 3 ------------------------");
const person1 = { name: "Rahul" };
const person2 = { name: "Raj" };

const R2 = () => setTimeout(() => console.log(`Person2: `, person2), 2500);
const R1 = () => console.log(`Person1: `, person1);
R2();
R1();

console.log("--------------------- 4 -----------------------");
const carA = "BMW";
const carB = "Ferrari";
console.log(setTimeout(() => console.log(`carA:`, carA), 3000));
console.log(setTimeout(() => console.log(`carB:`, carB), 500));

console.log("---------------------- 5 ----------------------");
const Turtle = "Go Slow";
const Horse = "Go Fast";
const racer1 = () => setTimeout(() => console.log("Winner: ", Horse), 3300);
const racer2 = () => setTimeout(() => console.log("Looser", Turtle), 5000);
racer1();
racer2();


// setInterval
const intervalID = setInterval(myCallback, 1000);
const bg =document.getElementById("box")

function myCallback(a, b) {
  console.log("Hello");
  bg.style.background ="blue";
  console.log("Hi");
  
}

// clearTimeut
var myVar;

function myFunction() {
  myVar = setTimeout(function(){ alert("Hello"); }, 3000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

// clearInterval
const myVar = setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  const t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}