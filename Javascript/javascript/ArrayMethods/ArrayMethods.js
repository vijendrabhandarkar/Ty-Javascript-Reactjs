var numbers = [10,30,40]
numbers.forEach(function (value, index) {
    console.log(`value at ${index} - ${value}`);
})

console.log(`-------------------------------------------`);
numbers.forEach((value, index) => {
    console.log(`value at ${index} - ${value}`);


})

console.log(`----------------------------------------------`);
numbers.forEach((value, index) => console.log(`value at ${index} - ${value}`))



console.log(`------------------------------------------------`);

var animals=[`Tiger`,`Lion`,`Elephant`,`Panda`,`cat`]
animals.forEach((value, index) => console.log(`value at ${index} - ${value}`))    

console.log(`--------------------------------------------------`);
var books = [
    {
        title : `java`,
        price : 1200
    },
    {
        title : `JavaScript`,
        price : 1500
    },
    {
        title : `Python`,
        price : 1000
    }
]
books.forEach((value,index) => {
    // console.log(`Value at index ${index} + ${value}`)
    console.log(value);
})

console.log(`---------------------------------------`);

var books = [
    {
        title : `java`,
        price : 1200
    },
    {
        title : `JavaScript`,
        price : 1500
    },
    {
        title : `Python`,
        price : 1000
    }
]
books.forEach(value => {
    if(value.price>1000){
        console.log(value);
    }
    
})

// joins
const numbsWithHifen = numbers.join('-')
console.log(`numbsWithHifen - ${numbsWithHifen}`);

//  using indexof method


const a= [10,20,30];
const persent=a.indexOf(10);
if (persent !== -1){
    console.log(`  persent`);
}else{
    console.log(` not persent`);
}

const a1= [10,20,30];
const persent1=a.indexOf(10);

if (persent1 === -1){
    console.log(` not persent`);
}else{
    console.log(`  persent`);
}

const a2= [10,20,30];
const persent2=a.indexOf(10);
if (persent2 === -1){
    console.log(` not persent`);
}else{
    console.log(`  persent`);
}

// Maps
let nums=[20,30,80,90]
let numbsAfterAddingten = nums.map(function(val,index){
    val=val+10;
    return val
});
console.log(`numsAfterAddingTen -${numbsAfterAddingten}`);


console.log(`-----------------------------------------------`);
const numsAfterAddingTenUsingArrow = nums.map((val,index)=>{
    return val + 10;
})

console.log(`numsAfterAddingTEnUsingArrow - ${numsAfterAddingTenUsingArrow}`);

console.log(`---------------------------------------------------`);
const numsAfterAddingTenUsingArrowSingleline = nums.map(val =>val+10)
console.log(`numsAfterAddingTEnUsingArrowSingleline - ${numsAfterAddingTenUsingArrowSingleline}`);

console.log(`-----------------------------------------------------------------`);
// --------------------------------Filter-------------------------------------------------------
const numbersData=[100,200,300]
const filteredNumbers = numbersData.filter(function(val,index){
    if(val>150){
        return true;
    }else{
        return false;
    }
})
console.log(`filteredNumbers - ${filteredNumbers}`);

console.log(`----------------------------------------------------------------------------`);
const filteredNumbersUsingArrow = numbersData.filter((val,index) => {
    return val > 150;
})
console.log(`filteredNumbersUsingArrow - ${filteredNumbersUsingArrow}`);

console.log(`------------------------------------------------------------------------------`);
const filteredNumbersUsingArrowSingleline = numbersData.filter(val => val > 150);
console.log(`filteredNumbersUsingArrowSingleline - ${filteredNumbersUsingArrowSingleline}`);

console.log(`--------------------------------------------------------------------------`);


console.log(`--------------Question(1)--------------------------------------------------`);
// 3.toUppercase
let fruits=[`Apple`,`Orange`,`Kiwi`,`Grapes`]
let fruits1= fruits.map(function(val,index){
    
    return val.toUpperCase()
});
console.log(`fruits1 - ${fruits1}`);

const elementWithUppercase = fruits.map(val => val.toUpperCase())
console.log(`elementWithUppercase - ${elementWithUppercase}`);


// 2.if length is greater than 5
const lengthgreater = fruits.filter(val => val.length >5) 
console.log(`lengthgreter - ${lengthgreater}`);


// 3.if "e is present in element add id "
const includeE = fruits.filter(val => val.includes('e'))
console.log(`includeE - ${includeE}`);