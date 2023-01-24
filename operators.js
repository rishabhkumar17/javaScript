/*
Operators -> 
    arithmetic 
    comparison 
    logical
    assignment
    ternary
*/

/* 
Arithmetic operators
    Addition -> a + b

    Subtraction -> a - b
    
    Multiplication -> a * b
    
    Division -> a / b
    
    Exponent -> a ** b -> 2 ** 4 = 16
    
    Modulo -> a % b -> 4 % 3 = 1 (4 divide by 3 - remainder is 1) | 4 % 10 = 4 (remainder is 4 because we were not successful in dividing 4 by 10)
    
    Increment and Decrement -> increase or decrease a value by 1 -> Let a = 5, a++ gives a = 6, a-- gives a = 5 because previous value of a was 6.
*/

/*
Comparison operators and equality
    returns true or false
    const a = 5, b = 10
    a > b -> false
    a < b -> true
    10 < 10 -> false
    10 <= 10 -> true
    10 == 10 -> true
    5 != 10 -> true -> 5 is not equal to 10

    Strict equality
    a === b
    Strict inequality
    a !== b

    5 == "5" -> true - loose equality
    5 === "5" -> false -> strict equality

    Strict equality === -> compares values and data types and return true on both true

    Loose equality == -> compares only values, doesn't compare data types

    The good ones : === !==
    The bad ones : == != (avoid using)
*/

/*
Assignment operator ( =, +=, -=, *=, /=)
    let number = 2
    number += 5 => 7
    number -= 5 => -3
    number *= 5 => 10
    let string = "hello"
    string += " john" 
    console.log(string) -> hello john 
*/

/* let string = 'hello';
string += ' john';
console.log(string); */

/*
Logical operators
    AND && -> all operands are true -> true
    OR || -> atleast one operand is true -> true
    NOT ! -> convert the boolean value to opposite value
*/

// AND operator
const age = 19;
const isVegan = true;
console.log(isVegan && age > 18); // returns true

console.log('truthy' && 1 && true && 1234); //returns 1234
//if all values are truthy, returns last truthy value

console.log('truthy' && 0 && true && 1234); //returns 0
// if one value if falsy, it will return the first falsy value

// OR operator
console.log('truthy' || 1 || true || 1234); //returns truthy
//returns the first truthy value

console.log('' || 0 || false || NaN); //retuns NAN
// if all operators are falsy, it returns last falsy value

// NOT operator
console.log(!false); // accept single value and returns inverse boolean value

console.log(!!0); // returns false
