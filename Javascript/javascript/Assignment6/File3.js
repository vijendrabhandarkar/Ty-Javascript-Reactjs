// Example For Shallow Copy
const person = {
    name: "Rohan",
    age: 29,
    hobbies: ["cricket", "football"],
    address: { city: "Delhi", pincode: 260126 },
  };
  console.log("----------------------");
  const personCopy = Object.assign({}, person);
  person.address.city = "Mumbai";
  console.log(person.address.city);
  console.log(personCopy.address.city);
  console.log("----------------------------");
  person.name = "Abhishek";
  console.log(person.name);
  console.log(personCopy.name);


//   Example For Deep Copy
const person = {
    name: "Rodar",
    age: 23,
    designation: "Developer",
    city: "Bangalore",
  };
  console.log("----------------------");
  const personCopy = Object.assign({}, person);
  person.city = "Hyderabad";
  console.log(person.city);
  console.log(personCopy.city);
  console.log("----------------------------");
  person.name = "Prakash";
  console.log(person.name);
  console.log(personCopy.name);
  