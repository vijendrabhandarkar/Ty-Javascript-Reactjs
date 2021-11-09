/* to execute first function first inside setTimeout we need to paas 
second function as callback to first function
 */
function first(test){
    setTimeout(function(){
        console.log('first function ')
        test();
    },1000) 
}

function second(){
    console.log('second function')
}

first(second)