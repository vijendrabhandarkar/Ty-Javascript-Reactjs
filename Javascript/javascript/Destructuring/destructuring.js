const person ={
    name1 :`Abhi`,
    age : 20,
    color : `white`
}
const {name1 , age,} = person
console.log(`name1 - `,name1);
console.log(`age - ${age}`);

console.log(`--------------------------------------------------`);
 const hobbies = [`Dancing`,`Rampwalk`,`Travelling`,`Swimming`]
 const [hobby1, hobby2, hobby3] = hobbies

 console.log(`hobby1 - ${hobby1}`);
 console.log(`hobby2 - ${hobby2}`);
 console.log(`hobby3 - ${hobby3}`);

 console.log(`------------------------------------------------------`);
 const hobbies1 = [`Dancing`,`Rampwalk`,`Travelling`,`Swimming`]
 const [hobby11, hobby22,, hobby33] = hobbies1

 console.log(`hobby11 - ${hobby11}`);
 console.log(`hobby22 - ${hobby22}`);
 console.log(`hobby33 - ${hobby33}`);


 console.log(`--------------------------------------------------------`);
 const personData ={
    name1 :`Abhi`,
    age : 20,
    color : `white`,
    address : {
        city : `Bengalore`,
        pincode :560062
    },
    hobbies2 : [`Reading`,`Googling`,`Numismatics`]
}

const{ city, pincode } = personData.address
console.log(city);
console.log(pincode);
const {hobbies2 : [hobby111, hobby222]} = personData
console.log(hobby111);
console.log(hobby222);
console.log(`-----------------------------------------------------------------------`);
const personData1 ={
    pName :`Abhi`,
    age : 20,
    color : `white`,
    paddress : {
        pCity : `Bengalore`,
        pPincode :560062
    },
    hobbies3 : [`Reading`,`Googling`,`Numismatics`]
}
const{ pName , paddress:{ pCity,pPincode}} = personData1
console.log(`pCity - ${pCity}`);
console.log(`pPincode - ${pPincode}`);
console.log(`pName - ${pName}`);
console.log(`---------------------------------------------------------------------------`);