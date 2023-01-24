/*
Logical and control flow
    If statements
    Truthy/Falsy values
    Switch statements
    Ternary operator
*/

/* If statements
    if(condition) {
        block of code runs if condition is true 
    }
*/
/* 
const age = 25;
if (age > 18) { this runs
  console.log('allowed');
} else if (age === 18) {
  console.log('You are 18, allowed');
} else {
  console.log('wait');
} */

/* 
Truthy/Falsy values
    if (condition) {
        console.log('truthy');
    } 
    javascript try to change the condition to a boolean value
*/

/* 
Falsy values
    false
    0
    ''
    null
    undefined
    NaN
    Everything else are truthy values
*/

if (false) {
  console.log('truthy');
} else {
  console.log('falsy');
}
