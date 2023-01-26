// 'new' keyword
// creates a new object
const person = {};
const person1 = new Object();
// both are same

person.name = 'John';
person1.name = 'John';

console.log(person);
console.log(person1);

const arr = [];
const arr1 = new Array();
// both are same
arr.push('John');
arr1.push('John');

console.log(arr);
console.log(arr1);

const myDate = new Date('January 28, 2023');

console.log(myDate); // Sat Jan 28 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myDate.getFullYear()); // 2023

console.log(Array);
console.log(Object);
console.log(Number);
console.log(Date);

const myNumber = new Number(110.155);
// By using new we can use built in properties
console.log(myNumber.toFixed(0)); // 110

// 'this' keyword
// references the object that is executing the current function

const Sentence = function (words) {
  this.words = words;
  console.log(this); // Sentence {words: 'Hello, how are you?'}
};

const string = new Sentence('Hello, how are you?');

console.log(this); // Window object

const individual = {
  name: 'david',
  getName() {
    console.log(this);
  },
};

individual.getName(); // individual object

function Car(color, brand, wheels) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;
  console.log(this);
}
const blueCar = new Car('blue', 'BMW', 4);
// Car {color: 'blue', brand: 'BMW', wheels: 4}

const redCar = new Car('red', 'Ferrari', 4);
// Car {color: 'red', brand: 'Ferrari', wheels: 4}

// A Class
// is a schema for an object
// that can save many values

const personn = {
  name: 'Melissa',
  age: 24,
  isWorking: true,
};

class Person {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
} // object oriented programming (OOP)

const user = new Person('Joaquin', 48, true);
const user2 = new Person('Joey', 25, true);

console.log(user);
console.log(user2);

const createPerson = (name, age, isWorking) => {
  const userSchema = {
    name,
    age,
    isWorking,
  };
  return userSchema;
}; // functional programming

const newUser = createPerson('Melissa', 24, true);

console.log(newUser);

const candidate = (name, age, isVegan) => ({
  name,
  age,
  isVegan,
});
const newCandidate = candidate('sage', 26, true);
console.log(newCandidate);
