// Objects
// is an unordered colletion of related data
// in form of key and value pair

const person = {
  firstName: 'Joaquin',
  lastName: 'Phoenix',
  age: 50,
  car: {
    brand: 'Toyota',
    year: 2015,
    color: 'red',
  },
};
console.log(person);

// accessing, adding and updating properties on an object

// dot notation
console.log(person.firstName);
//adding
person.dog = { name: 'tom', age: 7 };
console.log(person);
//updating
person.age = 48; // age updated
console.log(person);

console.log(person.dog.name); //access only dog name

// square bracket notation
console.log(person['firstName']); // Joaquin
//access property dynamically
const property = 'age';
console.log(person[property]);

person['Is a vegan'] = 'Yes'; //added property
console.log(person);

// objects methods

const myObj = {
  myMethod: () => {},
  myMethod1: function () {},
  myMethod2() {},
};

const dog = {
  name: 'Tom',
  age: 2,
  bark: () => {
    console.log('Wooffff');
  },
  listProperties: function () {
    //this refer to object dog/ works only in normal function
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};

dog.bark();
dog.listProperties(); // calling a method in object

// built-in object methods

// object methods are used directly on the object constructor
// 'Object' and use the object instance as parameter
// static object methods

// Object.keys() -> creates an array containing the keys of an object
const employees = {
  boss: 'Michael',
  secretary: 'Pam',
  sales: 'John',
  accountant: 'Oscar',
};

const positions = Object.keys(employees);
console.log(positions); // ['boss', 'secretary', 'sales', 'accountant']

// Object.values() -> creates an array containing the values of an object

const positionValues = Object.values(employees);
console.log(positionValues); // ['Michael', 'Pam', 'John', 'Oscar']

const session = {
  id: 1,
  time: '26-January-2023',
  device: 'mobile',
  browser: 'Chrome',
};

const sessionInfo = Object.values(session);
console.log(sessionInfo); // [1, '26-January-2023', 'mobile', 'Chrome']

// Object.entries() -> creates a nested array of the key/value pairs of an object.

const operatingSystem = {
  name: 'Ubuntu',
  version: '18.9',
  license: 'Open source',
};

const entries = Object.entries(operatingSystem);
console.log(entries);

entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];
  console.log(key, ':', value);
});

// Object.freeze() prevent modification
// to properties and values of an object and
// prevents properties from being
// added or removed from an object
const user = {
  username: 'John',
  password: '123456',
};

const admin = Object.freeze(user);

user.username = 'test'; // no update
user.password = '654321'; // no update
user.email = 'xyz'; // can't add new property
admin.username = 'test';
admin.password = '654321';

console.log(user); // no change because user object is freezed
console.log(admin); // no change because user object is freezed

// Object.seal() prevents new properties
// from being added to an object
// but allows modification of existing properties

const administrator = {
  username: 'John',
  password: '123456',
};
Object.seal(administrator);
administrator.username = 'test'; // modified property
administrator.email = 'xyz'; // no new property added

console.log(administrator); // {username: 'test', password: '123456'}
