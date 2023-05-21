let person = {
  firstName: "Ivan",
  secondName: "Ivanov",
};

console.log(person)

let newPerson = {};

person = newPerson;

newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
console.log(newPerson)