let n = 45
function outer (num) {
    let n1 = num
    
    function inner () {
        let val = 20
        console.log('n1', n1);
        let total = n + val
        console.log('inner function'); 
        return total 
    }
    return inner
}

// const value = outer(10)()
const innerFunc = outer(20)
const v = innerFunc()
const k = innerFunc()
console.log('v', v);
console.log('k', k);


// console.log('val', value);
// callback
function add(a,b){
    console.log(a+b);
}
function callbackfun(a,b,add){
    add(a,b)
}
callbackfun(30,20,add)

// recusrion
function recursefunc(numbs){
    let a = numbs;
    let b=a-1;
    if(a>1){
        console.log(b);
        recursefunc(b)
    }
}
recursefunc(20)
