// Asynchronous code

// setInterval()
// clearInterval()
const myInterval = setInterval(() => console.log('Hello world'), 1000);

clearInterval(myInterval);

// setTimeout()
// clearTimeout()
const myTimeout = setTimeout(() => console.log('Hello world'), 5000);

clearTimeout(myTimeout);

// setTimeout(() => console.log('At the top'), 5000); // run asynchronously after 5 sec
//console.log('At the bottom'); // runs synchronously immediately
/* output -> 
    At the bottom
    At the top 
*/

// What is synchronous javascript
/* 
syncronous javascript is one in which the code
is executed line by line and their tasks are completed instantly. i.e. there is no time delay in the completion of the tasks for those lines 
of code.
*/
// synchronous JS example

// const functionOne = () => {
//   console.log('function one, part 1');

//   functionTwo();

//   console.log('function one, part 2');
// };

// const functionTwo = () => {
//   console.log('function two');
// };

// functionOne();
/* 
output -> 
    function one, part 1
    function two
    function one, part 2
*/

// What is Asynchronous javascript
/* 
asynchronous javascript is one in which some
lines of code take time to run. These tasks are
run in the background while the javascript engine
keeps executing other lines of code. 
When the result of asynchronous tasks gets
available, is then used in the program 
*/
// Asynchronous JS example

const functionOne = () => {
  console.log('function one, part 1'); // 1

  functionTwo();

  console.log('function one, part 2'); // 2
};

const functionTwo = () => {
  setTimeout(() => console.log('function two'), 2000); // waiting -> 3
};

functionOne();
/* 
output -> 
    function one, part 1
    function one, part 2
    function two
*/