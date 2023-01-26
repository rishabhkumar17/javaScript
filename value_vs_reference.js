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

// cloning arrays

// spread operator (...)
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers); // 1 2 3 4 5

const newNumbers = [...numbers]; // shallow clone/copy
newNumbers.push(6);

console.log(newNumbers); // [1, 2, 3, 4, 5, 6]
console.log(numbers === newNumbers); // false
// both point to different locations

// slice()
const numbers2 = numbers.slice();
console.log(numbers2); // 1, 2, 3, 4, 5]

// cloning objects
// shallow cloning

// spread operator
const man = { name: 'John', age: 20 };
const otherMan = { ...man }; // shallow copy

man.name = 'David';
console.log(man); // {name: 'David', age: 20}
console.log(otherMan); // {name: 'John', age: 20}

// Object.assign()
const woman = { name: 'Jenny', age: 25 };
const otherWoman = Object.assign({}, woman);

woman.age = 22;
console.log(woman); // {name: 'Jenny', age: 22}
console.log(otherWoman); // {name: 'Jenny', age: 25}

const candidate = {
  name: 'Emma',
  car: {
    brand: 'BMW',
    color: 'blue',
    wheels: 4,
  },
};

const newCandidate = { ...candidate }; // one level copy

newCandidate.name = 'Mia'; // name is one level deep so updated in newCandidate only
newCandidate.car.color = 'red'; // color is 2 level deep so it is a shallow copy
console.log(candidate.name); // Emma
console.log(newCandidate.name); // Mia
console.log(candidate.car.color); // red
console.log(newCandidate.car.color); // red

const otherCandidate = { ...candidate, car: { ...candidate.car } }; // two level copy

// deep cloning
const character = {
  name: 'Emma',
  car: {
    brand: 'BMW',
    color: 'blue',
    wheels: 4,
  },
};

const stringifyCharacter = JSON.stringify(character);

console.log(stringifyCharacter);

const deepCopyCharacter = JSON.parse(stringifyCharacter);

console.log(deepCopyCharacter);

deepCopyCharacter.car.color = 'red';

console.log(character.car.color); // blue
console.log(deepCopyCharacter.car.color); // red

//one line deep cloning
const newCharacter = JSON.parse(JSON.stringify(character));
