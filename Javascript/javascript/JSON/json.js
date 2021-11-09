const person = {
    name : `Abhi`,
    age : 14,
    color : `black`
}

// can use this for deep copy
const stringifiedPerson = JSON.stringify(person)
console.log(`After conversion from JS to JSON`,stringifiedPerson);

console.log(`---------------------------------------------------------`);
 
const jsPersonObject = JSON.parse(stringifiedPerson)
console.log(`After the conversion from JSON to JS`,jsPersonObject);


