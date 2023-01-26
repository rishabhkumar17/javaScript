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
};
const otherPerson = person;
person.firstName = 'Johnny';

console.log(person); // {firstName: 'Johnny', lastName: 'Snow'}
console.log(otherPerson); // {firstName: 'Johnny', lastName: 'Snow'}
// Why both objects are same?
