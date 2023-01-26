//primitive
let firstPerson = 'Mark';
let secondPerson = firstPerson; // copied value

firstPerson = 'Austin';

console.log(firstPerson); // Austin
console.log(secondPerson); // Mark

//complex (non primitive)

const animals = ['dogs', 'cats'];
const otherAnimals = animals;

animals.push('cow');
console.log(animals); // ['dogs', 'cats', 'cow']
console.log(otherAnimals); // ['dogs', 'cats', 'cow']
// Why are both arrays same?

const person = {
  firstName: 'John',
  lastName: 'Snow',
}; // #123asd example location
const otherPerson = person; // pointing/reference to #123asd
person.firstName = 'Johnny';
// person and otherPerson point to 'same location' in the memory

console.log(person); // {firstName: 'Johnny', lastName: 'Snow'}
console.log(otherPerson); // {firstName: 'Johnny', lastName: 'Snow'}
// Why both objects are same?

// When a variable is assigned a primitive value it just copies that value.
// When a variable is assigned a complex / non primitive value
// it is givin a reference to that objects location in memory

const individual = { name: 'John' }; // #123asd
const otherIndividual = { name: 'John' }; // #321dsa

console.log(individual === otherIndividual); // false
// because both objects point to different location

const individual2 = individual;
console.log(individual === individual2); // true
// both point to same memory location
