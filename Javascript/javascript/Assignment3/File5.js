// For of Loops using Array
var fruits = [`Apple`,`Banana`,`Orange`]
allfruits =``

for(var fruit of fruits){
    console.log(`Fruit - ${fruit}`);
    allfruits += fruit + `-`
    
}
console.log(`fruits  - ${fruits}`);
console.log(`All fruits `+ allfruits); 
console.log(`----------------------------`);

var bikes = [`Yahama`,`KTM`,`Honda`]

allbikes = ``
for(var bike of bikes){
    console.log(`Bike - ${bike}`);
    allbikes += bike + `-`
}
console.log(`bikes - ${bikes}`);
console.log(`All bikes `+ allbikes);
console.log(`----------------------------`);
 var banks =[`SBI`,`Citi`,`Karnataka`,`Reserve bank of india`]

 allbanks =``
 for(var bank of banks){
     console.log(`bank - ${bank}`);
     allbanks += bank + `-`
 }
 console.log(`banks - ${banks}`);
 console.log(`All banks -`+allbanks);
 console.log(`----------------------------`);

 var malls =[`Dmart`,`Bigbazzar`,`umart`]

 allmalls =``
 for(var mall of malls){
     console.log(`mall - ${mall}`);
     allmalls += mall + `-`
 }
 console.log(`mall - ${malls}`);
 console.log(`All malls -`+allmalls);
 console.log(`----------------------------`);
 var atms =[`Rupay`,`Tap visa`]

 allatms =``
 for(var atm of atms){
     console.log(`atm - ${atm}`);
     allatms+= atm + `-`
 }
 console.log(`atms - ${atms}`);
 console.log(`All atms -`+allatms);
 console.log(`----------------------------`);


//  For in for array
var allAtms = [`Rupay`,`Visa`]

for(var index in allAtms){
    console.log(allAtms[index]);
}
console.log(`----------------------------`);
var allBus = [`Goverment`,`Private`]

for(var index in allBus){
    console.log(allBus[index]);
}
console.log(`----------------------------`);
var allskills = [`Technical`,`Soft`]

for(var index in allskills){
    console.log(allskills[index]);
}
console.log(`----------------------------`);
var  allhotel= [`Nandi`,`Ram`]

for(var index in allhotel){
    console.log(allhotel[index]);
}
console.log(`----------------------------`);
var allBags = [`skybag`,`normal`]

for(var index in allBags){
    console.log(allBags[index]);
}

console.log(`----------------------------`);

// For in for object

var books = {
    Title : `java`,
    price: 1200,
}
for (var index in books){
    console.log(books[index]);
 }
 console.log(`----------------------------`);
 var bike={
     name :`Yahama`,
     price : 2500000.9,
 }
 for (var index in bike){
    console.log(bike[index]);
 }
 console.log(`----------------------------`);
 var shirt={
     name :`Levis`,
     price : 2900,
 }
 for (var index in shirt){
    console.log(shirt[index]);
 }

 console.log(`----------------------------`);
 var Bluetooth={
     name :`oneplus`,
     price : 1900,
     
 }
 for (var index in Bluetooth){
    console.log(Bluetooth[index]);
 }
 console.log(`----------------------------`);
 var Pens={
     name :`Reynolds`,
     price : 10,
     
 }
 for (var index in Pens){
    console.log(Pens[index]);
 }
