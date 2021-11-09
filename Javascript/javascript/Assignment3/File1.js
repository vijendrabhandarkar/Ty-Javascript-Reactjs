// callback function Example

function Dev(callbackFunc) {
    console.log(`Per function`);
    callbackFunc()
    
}
function Lop() {
    console.log(`Dev function`)
    
}
Dev(Lop);

