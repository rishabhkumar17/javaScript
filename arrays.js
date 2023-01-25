// Arrays
const months = ['january', 'february', 'march', 'april'];

console.log(months);
console.log(typeof months); //object
console.log(months[0]); // element at index 0
months[3] = 'may'; // replacing value at an index
console.log(months); // ['january', 'february', 'march', 'may']
console.log(months.length); // 4

const example = [
  // arrays can store different data types and functions
  'cherry',
  7,
  true,
  () => {
    return 'func';
  },
];
console.log(example[3]()); // calling a function in an array
console.log('..........');
// loop through months
for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

const names = ['John', 'Bob', 'David', 'Mark'];

// array push() -> adds a new element value to end of array
console.log(names.push('David')); // returns length of array
console.log(names); // ['John', 'Bob', 'David', 'Mark', 'David']

// array pop() -> deleted last element from array
console.log(names.pop()); // removes last element and
// returns poped element -> David

// array shift() -> deletes the first elemnt of array
console.log(names.shift()); // deletes 'John' from array and returns it
console.log(names); // ['Bob', 'David', 'Mark']

// array unshift() -> adds a new value to start of an array
console.log(names.unshift('John')); // returns new array length
console.log(names); // ['John', 'Bob', 'David', 'Mark']

/* splice()

(method) Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[] (+1 overload)
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@param items — Elements to insert into the array in place of the deleted elements.
@returns — An array containing the elements that were deleted.
*/
const deletedElements = names.splice(2, 1, 'Jenny', 'Smith');
console.log(deletedElements); // returns ['David']
console.log(names);

// array slice() -> create new array with copied few parts of an array
const withoutJohn = names.slice(1, -1);
console.log(withoutJohn);
