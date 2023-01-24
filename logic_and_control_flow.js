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

const age = 25;
if (age > 18) {
  console.log('allowed'); //returns allowed
} else if (age === 18) {
  console.log('You are 18, allowed');
} else {
  console.log('wait');
}

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

/* 
switch statement
*/

const superHero = 'Superman';

switch (superHero) {
  case 'Iron Man':
    console.log('Love you 3000');
    break;
  case 'Thor':
    console.log('Bring me thanos');
    break;
  case 'Captain America':
    console.log('Backy');
    break;
  default:
    console.log('Man of Steel');
}

/* 
Ternary operator
  condition ? if true : if false
*/
const a = 20;
const result = a > 19 ? 'Accepted' : false;
console.log(result);

// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

/* 
for loop
  for([initialization], [condition], [final-expression]) {
    //body
  } 
*/
for (i = 0; i <= 10; i++) {
  console.log(i);
}

//dont't write DRY code -> DRY -> Do not repeat yourself
