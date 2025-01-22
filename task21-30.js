// Task 21: Create variables of different data types
let stringVar = "Hello, World!"; // string
let numberVar = 42; // number
let booleanVar = true; // boolean
let nullVar = null; // null
let undefinedVar; // undefined
let objectVar = { key: "value" }; // object

// Task 22: Use the typeof operator to determine the type of various variables
console.log(typeof stringVar); // "string"
console.log(typeof numberVar); // "number"
console.log(typeof booleanVar); // "boolean"
console.log(typeof nullVar); // "object" (known JavaScript quirk)
console.log(typeof undefinedVar); // "undefined"
console.log(typeof objectVar); // "object"

// Task 23: Declare a symbol and print its type
let symbolVar = Symbol("unique");
console.log(typeof symbolVar); // "symbol"

// Task 24: Assign the value null to a variable and check its type using typeof
let anotherNullVar = null;
console.log(typeof anotherNullVar); // "object" (JavaScript quirk)

// Task 25: Differentiate between declaring a variable using var and let in terms of scope
if (true) {
    var varVariable = "I am declared with var"; // function-scoped
    let letVariable = "I am declared with let"; // block-scoped
}
console.log(varVariable); // Accessible outside the block
// console.log(letVariable); // Error: letVariable is not defined

// Task 26: Convert a string to a number using both implicit and explicit conversion
let str = "123";
let numImplicit = str * 1; // Implicit conversion
let numExplicit = Number(str); // Explicit conversion
console.log(numImplicit); // 123
console.log(numExplicit); // 123

// Task 27: Convert a boolean to a string and vice versa
let boolToString = String(true); // "true"
let stringToBool = Boolean("false"); // true (non-empty strings are truthy)
console.log(boolToString); // "true"
console.log(stringToBool); // true

// Task 28: Practice basic arithmetic operators (+, -, *, /, %)
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1

// Task 29: Use the ++ and -- operators on a numeric variable
let counter = 5;
console.log(++counter); // 6 (pre-increment)
console.log(counter++); // 6 (post-increment)
console.log(--counter); // 6 (pre-decrement)
console.log(counter--); // 6 (post-decrement)

// Task 30: Explore the precedence of operators by combining multiple operators in a single expression
let result = 10 + 2 * 3 / (2 - 1) - 5;
// Precedence: Parentheses > Division/Multiplication > Addition/Subtraction
console.log(result); // 11