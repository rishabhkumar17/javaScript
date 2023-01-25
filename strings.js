// Strings
let message = 'Hello I\'m sage, people also call me "savage"';
console.log(message);

const _name = 'john';
console.log(_name.length); // length of string
console.log(_name[0]); // first letter at index 0
console.log(_name[_name.length - 1]); // last letter at length - 1

// upppercase and lowercase letters
const mixedCaseString = 'Hello How Are You';
const lowerCaseString = mixedCaseString.toLowerCase();
const uppperCaseString = mixedCaseString.toUpperCase();
console.log(lowerCaseString);
console.log(uppperCaseString);

// Searching for a substring
const hobbies = 'I love javascript, react, node, javascript';
/* indexOf() 
Returns the position of the first occurrence of a substring.
@param searchString — The substring to search for in the string
@param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. */
const index = hobbies.indexOf('javascript', 4);
console.log(index); // returns index 7

/* lastIndexOf() 
Returns the last occurrence of a substring in the string.
@param searchString — The substring to search for.
@param position — The index at which to begin searching. If omitted, the search begins at the end of the string.
*/
const lastIndex = hobbies.lastIndexOf('javascript');
console.log(lastIndex);

/* includes()
Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
@param searchString — search string
@param position — If position is undefined, 0 is assumed, so as to search all of the String.
 */
const includeJavaScript = hobbies.includes('javascript');
console.log(includeJavaScript);

// startsWith()
console.log(hobbies.startsWith('I')); // true
// endsWith()
console.log(hobbies.endsWith('t')); // true

// getting a substring
const exampleString = 'Vegan pizza';
/* slice();
Returns a section of a string.
@param start — The index to the beginning of the specified portion of stringObj.
@param end
The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. */
const food = exampleString.slice(6, 11);
console.log(food);

// split a string
const exampleStr = 'elephant';
/* split()
Split a string into substrings using the specified separator and return them as an array.
@param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit — A value used to limit the number of elements returned in the array.
*/
const letters = exampleStr.split(''); //returns an array
console.log(letters);

const phrase = 'Observe your own life, and you will know the Truth';
const splitPhrase = phrase.split(' ');
console.log(splitPhrase);

// reverse a string
const exStr = 'test'; // tset
// const strArr = exStr.split('');
// console.log(strArr);
// const reversedArr = strArr.reverse();
// console.log(reversedArr);
// const reversedString = reversedArr.join('');
// console.log(reversedString);
const reversedStr = exStr.split('').reverse().join('');
console.log(reversedStr);

// repeat()
const dogSays = 'woof';
console.log(dogSays.repeat(3));

// trim() ->  Removes the leading and trailing white space
// and line terminator characters from a string.
const email = '   contact@sage.com   ';
console.log(email.trim());

// Guests problem
const guestList = 'Our guests are: emma, jacob, isabella, ethan';

// 1. get length of the string and store it in a variable called length
const length = guestList.length;
console.log(`Length: ${length}`);

// 2. uppercase and store in uppercaseGuestList
const uppercaseGuestList = guestList.toUpperCase();
console.log(uppercaseGuestList);

// 3. check if 'ETHAN is on uppercaseGuestList
// store the answer in isEthanOnTheList
// datatype : boolean
const isEthanOnTheList = uppercaseGuestList.includes('ETHAN');
console.log(isEthanOnTheList);

// 4. create a substring: EMMA, JACOB, ISABELLA, ETHAN
// store in variable substringGuests
const indexSubString = uppercaseGuestList.indexOf('EMMA');
const substringGuests = uppercaseGuestList.slice(indexSubString);
console.log(substringGuests);

// 5. create an array from substring and store in guests
const guests = substringGuests.split(', ');
console.log(guests);
