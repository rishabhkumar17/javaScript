// Asynchronous code

// setInterval()
// clearInterval()
const myInterval = setInterval(() => console.log('Hello world'), 1000);

clearInterval(myInterval);

// setTimeout()
// clearTimeout()
const myTimeout = setTimeout(() => console.log('Hello world'), 5000);

clearTimeout(myTimeout);

setTimeout(() => console.log('At the top'), 5000); // run asynchronously after 5 sec
console.log('At the bottom'); // runs synchronously immediately
/* output -> 
    At the bottom
    At the top 
*/
