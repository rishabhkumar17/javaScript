// create a variable using var keyword
var variable = 'variable';

// // create a variable using let, const keyword (ES6)
let letVar = 'let variable';
const constVAr = 'const variable';

// $, _, any alphabet is valid first letter for a variable
// let $name, _name, name;

/* data types:
primitive - Strings, Numbers, Boolean, Null, Undefined
complex - Object, Symbol 
*/

// String
// no difference in single and double quotes
// static value
const singleQuotes = 'single';
const doubleQuotes = 'double';

// backticks - for dynamic value
const userName = 'john';
const backticks = `Hello ${userName}`;
const sum = `${17 + 17}`; // dynamic value

// Numbers
const wholeNumber = 17;
const decimalNumber = 17.5;
const string = 'Hello';
// can multiply divide add subtract numbers and many other operations
// wholeNumber/ decimalNumber -> Number
// string / wholeNumber -> NaN -> typeof NaN -> number

// Booleans -> true or false
const answer = true; //or false

// Null -> unknown or null or empty value
const nothing = null; //typeof null is object

// Undefined -> variable is declared but not assigned a value
let x;

// Objects
const person = {
  name: 'John',
  age: 25,
};
// person.name -> dot notation

// Arrays -> typeof object
const arr = [1, 2, 3, 4, 5]; //store multiple primitive data types

//date object
const date = new Date();

/* 
In general programming, There are two types of  
programming languages ->

Statically typed -> each variable and expression type is
already known at compile time. Once a variable is declared a data type it can't be changed. eg -> C, C++, Java

Dynamically typed -> can recieve different data types over time eg -> JavaScript is dynamically typed
*/
