// Function -> A block of code used to perform a task
/* 
function declaration -> defining a function
    function functionName(parameters) {
        body
        has access to "this" keyword
    }
*/
function square(num) {
  return num * num;
}
/* 
function call -> calling or executing a function
    functionName(arguments)
*/
const result = square(7);
console.log(result);

/* 
A fuction expression
    const name = function(params) {
        body
    } 
*/

/* 
An arrow function
    const name = (params) => {
        body
    }
*/

function sayHello(name) {
  return `Hello, ${name}`;
}
const res = sayHello('John');
console.log(res);

// if function returns undefined if we do not specify what to return

function add(a, b) {
  return a + b; // it stops the execution of function
  return a; // it will not execute
}
const sum = add(2, 3); //function call
console.log(sum);

// Arrow Function -> do not have 'this' keyword
/* 
const cube = (number) => {
  return number * number * number;
};  
*/
//write it like this if one return statement
const cube = (number) => number * number * number;
console.log(cube(5));

// Parameters -> used in defining a function, not accessible outside function
// Arguments -> passed when making a function call

/* 
const functionName = (parameters) => {
    body
}
functionName(arguments)
*/
const data = (name, age = 20 /* default parameter */) => {
  return `name: ${name} age: ${age}`;
};

console.log(data('john'));
