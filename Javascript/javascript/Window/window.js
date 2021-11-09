var str=`Hello`
console.log(`str -`,str);
console.log(`window str`,window.str);

console.log(`-----------------------------------------------------`);
function getName(){
     return `ABhi`
}
console.log(`getName -`, getName());
console.log(`window getName-`,window.getName());
console.log(`-----------------------------------------------------`);
console.log(window);


console.log(`Inner height`,window.innerHeight);
console.log(`Inner width`,window.innerWidth);

// // alert method
// window.alert(`Good Afternoon`)


// window.confirm(`Are You Male?`)

// const isEligible= window.confirm(`Is your age greater than 18 ?`)
// console.log(`isEligible- ${isEligible}`);
// if(isEligible){
//     console.log(`Eligible for Voting`);

// }else{
//     console.log(`not Eligible for Voting`);
// }

console.log(`----------------------------------------------------`);
        // const age = window.prompt(`Please enter your age`,30)
        // console.log(`Age - ${age}`);
        // if(age >= 18){

        //     // console.log(`Eligble for voting`);
        //     window.open(`http://www.flipkart.com`)

        // }else{
        //     // console.log(`not Eligible for Voting`);
        //     window.open(`http://www.firstcry.com`)
        // }

console.log(`---------------------------------------------------------`);
// window.open(`http://www.flipkart.com`)

console.log(`location `,location);
console.log(`history -`,history);
console.log(`navigator-`,navigator);

navigator.geolocation.getCurrentPosition(loc =>{
    console.log(`location-`,loc);
})