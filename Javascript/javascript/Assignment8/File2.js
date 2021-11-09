// Example for Recursion
function log(num){
    if(num > 5){
        return;
    }
    console.log(num);
    log(num + 1);
}

const res =log(1);
console.log(res);