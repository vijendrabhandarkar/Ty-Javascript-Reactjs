function addNumbers(...nums) {
    let sum =0
    for (let i=0; i<nums.length; i++){
        sum += nums[i]
    }
    console.log(`sum - ${sum}`);
}
addNumbers(10,20,30)
addNumbers(10)
addNumbers(10,30,40)
addNumbers(10,30,40,70)

// default parameter
function greet (name=`Abhishek`) {
    console.log(`Welcome  ${name}`);
}
greet(`Ajay`)