const names = ['John', 'Jenny', 'David'];
// forEach() -> iterate an array return undefined
names.forEach((name, i) => {
  console.log(i, name);
});
/* 
USE
do something with each element
do not allocate memory
*/
let sum = 0;
const numbers = [20, 45, 50, 30, 17];
numbers.forEach((number) => (sum += number));
console.log(sum); // 162
/*
DON'T USE
want to stop or break loop when some condition is true
you're working with async code
*/

const inventory = [
  { price: 5, name: 'tofu' },
  { price: 4, name: 'peanuts' },
  { price: 3, name: 'cashew cream' },
  { price: 5, name: 'chickpeas' },
];
// map() -> loops through arrays, allocates memory to store and return new array

const prices = inventory.map((item) => item.price);
console.log(prices); // [5, 4, 3, 5]
const items = inventory.map((item) => item.name);
console.log(items); // ['tofu', 'peanuts', 'cashew cream', 'chickpeas']

// filter() -> returns a new array based on a condition on elements
const nums = [-10, 0, -2, 15, -36, 25];
const positiveNums = nums.filter((num) => num >= 0);
console.log(positiveNums); // [0, 15, 25]

const employeesData = [
  { name: 'Sebastian', overtime: 5 },
  { name: 'Cardi', overtime: 10 },
  { name: 'George', overtime: 12 },
  { name: 'George', overtime: 6 },
];

const employeesToReward = employeesData.filter(
  (employee) => employee.overtime >= 7
);
console.log(employeesToReward);

const employeesToRewardNames = employeesToReward.map(
  (employee) => employee.name
);
console.log(employeesToRewardNames);

// find() -> returns the first value in an array that
// satisfies the condition
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const element = numbs.find((numb) => numb > 5);
console.log(element);

const states = ['Alaska', 'California', 'Colarado', 'Hawaii'];
const beginWithC = states.find((state) => state.startsWith('C'));
console.log(beginWithC);

// includes() -> case sensitive -> returns true/false
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true

const pets = ['cat', 'dog', 'cow', 'chicken'];
console.log(pets.includes('elephant')); // false

const bookshelf = ['Moby', 'Gatsby', 'Pride'];
if (bookshelf.includes('Moby')) console.log('We have the book');
else console.log('Cannot find the book');

// sort() -> alphabetically sort and mutate the original array
const namess = ['Anne', 'Carl', 'Bob', 'David'];
namess.sort();
console.log(namess); // ['Anne', 'Bob', 'Carl', 'David']

const numberss = [6, 3, 1, 5, 2, 8, 5, 6, 17];
// numberss.sort(); // [1, 17, 2, 3, 5, 5, 6, 6, 8];
// numberss.sort((a, b) => a - b); // [1, 2, 3, 5, 5, 6, 6, 8, 17]; ascending
numberss.sort((a, b) => b - a); // [17, 8, 6, 6, 5, 5, 3, 2, 1] descending
console.log(numberss);

const array = [1, 2, 3, 4, 5];

// some()
const greaterThan3 = (number) => number > 3;
array.some(greaterThan3); // returns true as atleast one element is greater than 3

// every()
array.every((ele) => ele > 0); // returns true as every element is greater than 0

// reduce()

/* (method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. */

const groceryList = [32, 12, 34, 53, 67, 23];
// Array.reduce((accumulator, currentValue) => {}, initialValueOfAccumulator);
const total = groceryList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(total); // 221
