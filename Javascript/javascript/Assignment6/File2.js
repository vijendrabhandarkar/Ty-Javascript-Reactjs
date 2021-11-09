// add,remove,update- array operations
// (add)
const n = [20,30,50]
console.log(n)
const a = n;
n.splice(2,0,40)
console.log(a);

// (remove)


function func() {
    const arr = [20,30,50];
    const spliced = arr.splice(2,1);
    console.log("Removed element: " + spliced );
    console.log("Remaining elements: " + arr);
}
func();

// update
const A = [20,30,50]
console.log(A);
const B = A;
B[0] = 5;
console.log(B);

// (2)
const array =[100,300,500,250,400,800,660,490,900,555];
const arrayCopy1 = [...array];
console.log('---------------------- ADD ---------------------');
const addArray = parseInt(prompt("Enter an Array to add"))
const newArray1 = arrayCopy1.push(addArray)
console.log(arrayCopy1);

console.log('-------------------- REMOVE -----------------------');
const arrayCopy2 = [...array];
const removeArray = parseInt(prompt("Enter an Index to remove an Array",`${(array).join("--")}`))
const newArray2 = arrayCopy2.splice(removeArray,1);
console.log(arrayCopy2);

console.log('---------------------- UPDATE ---------------------');
const arrayCopy3 = [...array];
const updateArray1 = parseInt(prompt("Enter a new array"))
const updateArray2 = parseInt(prompt("Enter index where you want to place the array"));
const newArray3 = arrayCopy3.splice(updateArray2,1,updateArray1)
console.log(arrayCopy3);