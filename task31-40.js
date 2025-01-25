// Task 31: Compare two numbers using relational operators
let num1 = 10;
let num2 = 20;

console.log("Task 31:");
console.log(num1 > num2);  // false
console.log(num1 < num2);  // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true

// Task 32: Use equality (==) and strict equality (===) operators to compare different data types
let a = '5';
let b = 5;

console.log("\nTask 32:");
console.log(a == b);  // true (loose equality, type conversion occurs)
console.log(a === b); // false (strict equality, no type conversion)

// Task 33: Compare two strings lexicographically
let str1 = "apple";
let str2 = "banana";

console.log("\nTask 33:");
console.log(str1 < str2); // true ("apple" comes before "banana")
console.log(str1 > str2); // false

// Task 34: Use the inequality (!=) and strict inequality (!==) operators
let x = '10';
let y = 10;

console.log("\nTask 34:");
console.log(x != y);  // false (loose inequality, type conversion occurs)
console.log(x !== y); // true (strict inequality, no type conversion)

// Task 35: Compare null and undefined using both == and ===
console.log("\nTask 35:");
console.log(null == undefined);  // true (loose equality, both represent "no value")
console.log(null === undefined); // false (strict equality, different types)

// Task 36: Write an if statement that checks if a number is even or odd
let number = 15;

console.log("\nTask 36:");
if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}

// Task 37: Use nested if statements to classify a number as negative, positive, or zero
let num = -5;

console.log("\nTask 37:");
if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// Task 38: Use the conditional (ternary) operator to rewrite a simple if…else statement
let age = 20;

console.log("\nTask 38:");
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// Task 39: Check the validity of a variable using the ? operator
let value = null;

console.log("\nTask 39:");
let isValid = value ? "Valid" : "Invalid";
console.log(isValid);

// Task 40: Use the conditional operator to assign a value to a variable based on a condition
let temperature = 30;

console.log("\nTask 40:");
let weather = temperature > 25 ? "Hot" : "Cold";
console.log(weather);