var todaysDate = new Date()
console.log(`Todays date ${todaysDate}`);



var futureDate = new Date(2022,1,2,12,30,45)
console.log(`Future date - ${futureDate}`);

var dateOfBirth = new Date(`april 11 1998`)
console.log(`Date of Birth ${dateOfBirth}`);

var findDateUsingMilliseconds = new Date(86400000)
console.log(`Date With Milliseconds - ${findDateUsingMilliseconds}`);

console.log(`--------------------------------------------------------`);

console.log(`Full year - ${todaysDate.getFullYear()}`);
console.log(`Month - ${todaysDate.getMonth()}`);
console.log(`Date  - ${todaysDate.getDate()}`);
console.log(`Day - ${todaysDate.getDay()}`);
console.log(`Date Time - ${Date .now()}`);

console.log(`--------------------------------`);
 var months =[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]

 var formatDate = new Date (`dec 10,2022`)
 var month = formatDate.getMonth()

 console.log(`${months[month]} ${formatDate.getDate()} ${formatDate.getFullYear()} `);

 console.log(`-------------------------------------------------------------`);

 console.log(Math.round(1,8));
 console.log(Math.abs(-6));
 console.log(Math.pow(5,6));
 console.log(Math.min(1,5));
 console.log(Math.max(5,6,90));
 console.log(Math.ceil(12,5));
 console.log(Math.floor(12,2));
 console.log(Math.random());

 console.log(`---------------------------------------------------`);


 console.log(Math.round(Math.random()*100)+1);