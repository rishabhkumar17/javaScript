// ECMAScript 6 or ES6

//const and let

// arrow functions
const functionName = (parameters) => {
  return parameters;
};

// default parameters
const add = (a, b, c = 0) => a + b + c;

console.log(add(2, 2));

// template strings
const customer = 'John';
const order = {
  name: 'iPad',
  price: 1400,
};

// old way
const message =
  'Hello ' +
  customer +
  ', do you want to buy ' +
  order.name +
  ' for ' +
  order.price;

console.log(message);

// template string way
const newMessage = `Hello, ${customer}, do you want to buy ${order.name} for ${order.price}`;

console.log(newMessage);

// imports and exports
// add type=module in script in index file

import { dogs, numberOfDogs } from './dogs.js';
import onlyOneThing from './test.js';

console.log(`My dogs are ${dogs}`);
console.log(`I have ${numberOfDogs} dogs`);
console.log(onlyOneThing);

// rest and spread operator ( ... )

// const addd = (a, b) => a + b;
// rest operator
const addd = (...args) => {
  console.log(args); // array of arguments
  return args.reduce((acc, val) => acc + val);
};
console.log(addd(2, 2, 2, 2, 2, 2, 2));

// spread operator

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];

console.log(...numbers); // 1 2 3 4 5
console.log(...newNumbers); // 1 2 3 4 5 6

const object = { name: 'John', age: 25 };
const object1 = { ...object, name: 'Jenny' };

console.log(object);
console.log(object1);

// object destructuring

const person = {
  firstName: 'Gary',
  lastName: 'Vee',
  car: {
    color: 'red',
    wheels: 4,
  },
  animals: {
    dog: {
      name: 'Fluffy',
      age: 4,
    },
    cat: {
      name: 'Kitty',
      age: 3,
    },
  },
};

// DRY -> do not repeat yourself
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.car.color);
// console.log(person.car.wheels);
// console.log(person.animals.dog.name);
// console.log(person.animals.cat.name);

// object destructing
const {
  firstName,
  lastName,
  car: { color, wheels },
  animals: { dog, cat },
} = person;

console.log(firstName);
console.log(lastName);
console.log(color);
console.log(wheels);
console.log(dog.name);
console.log(cat.name);

// Node js
const test = (request, response) => {
  const { body, params } = request;
};

// React js
const Component = ({ props }) => {};

// array destructuring
const introduction = ['Hello', 'I', 'am', 'Sarah'];
// const greeting = introduction[0];
// const name = introduction[3];

const [greeting, , , name] = introduction;
console.log(greeting, name);
