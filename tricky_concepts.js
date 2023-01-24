// Global scope
const _name = 'john';
const logname = () => {
  console.log(_name); // name is global scope -> accessible
};
logname();

// Local scope
const some = () => {
  //function or local scope
};

//Block scope
if (true) {
  let name = 'johnny'; // not accessible outside
  var x = 5; // accessible outside
  // block scope
}
console.log(x); // var is accessible in global scope

// Hoisting in JavaScript
/* is a javaScript mechanism where variable & functions 
declarations are moved to the top of their scope before code 
execution -> lifted to top of their scope*/
// age = 20;
// console.log(age);
// var age; //hoisted

// age = 20;
// console.log(age);
let age; //ReferenceError: Cannot access 'age' before initialization

hoist();
function hoist() {
  // function declaration hoisted
  var message = 'test';
  console.log(message);
}

// hoist2(); // ReferenceError: Cannot access 'hoist2' before initialization
const hoist2 = () => {
  // arrow function not hoisted
  var message = 'test';
  console.log(message);
};

// Closures in JavaScript

/* const outer = () => {
  const outerVar = 'hello';

  const inner = () => {
    const innerVar = 'hey';
    console.log(outerVar, innerVar);
  };
};

inner(); */ // ReferenceError: inner is not defined

const outer = () => {
  const outerVar = 'hello';

  const inner = () => {
    const innerVar = 'hey';
    console.log(outerVar, innerVar);
  };
  return inner;
};

const innerFn = outer();
innerFn(); // nested functions have access to variables declared in outer scope
