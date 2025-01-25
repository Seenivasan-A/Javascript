
// Logical Operators and Functions in JavaScript

// Task 41: Evaluate various combinations of logical operators (&&, ||, !)
function task41() {
    const a = true;
    const b = false;

    console.log("Task 41:");
    console.log("a && b:", a && b);
    console.log("a || b:", a || b);
    console.log("!a:", !a);
    console.log("!b:", !b);
    console.log();
}

// Task 42: Use logical operators to write a condition that checks if a number is in a given range
function task42() {
    function isInRange(num, lower, upper) {
        return num >= lower && num <= upper;
    }

    console.log("Task 42:");
    console.log("Is 5 in range 1 to 10:", isInRange(5, 1, 10));
    console.log("Is -1 in range 0 to 10:", isInRange(-1, 0, 10));
    console.log();
}

// Task 43: Use the NOT (!) operator to invert a boolean value
function task43() {
    const booleanValue = true;
    const invertedValue = !booleanValue;

    console.log("Task 43:");
    console.log("Original value:", booleanValue);
    console.log("Inverted value:", invertedValue);
    console.log();
}

// Task 44: Evaluate the short-circuiting nature of logical operators
function task44() {
    function shortCircuitTest() {
        console.log("Function executed!");
        return true;
    }

    console.log("Task 44:");
    console.log("Short-circuit with AND (false && ...):", false && shortCircuitTest());
    console.log("Short-circuit with OR (true || ...):", true || shortCircuitTest());
    console.log();
}

// Task 45: Compare two non-boolean values using logical operators and observe the result
function task45() {
    const x = 0;
    const y = 5;

    console.log("Task 45:");
    console.log("x || y:", x || y); // Returns y because x is falsy
    console.log("x && y:", x && y); // Returns x because x is falsy
    console.log();
}

// Functions Tasks

// Task 46: Write a function that takes two numbers as arguments and returns their sum
function task46() {
    function addNumbers(num1, num2) {
        return num1 + num2;
    }

    console.log("Task 46:");
    console.log("Sum of 3 and 4:", addNumbers(3, 4));
    console.log();
}

// Task 47: Create a function that calculates the area of a rectangle
function task47() {
    function calculateArea(length, width) {
        return length * width;
    }

    console.log("Task 47:");
    console.log("Area of rectangle (5, 10):", calculateArea(5, 10));
    console.log();
}

// Task 48: Declare a function without parameters and call it
function task48() {
    function greet() {
        console.log("Hello, world!");
    }

    console.log("Task 48:");
    greet();
    console.log();
}

// Task 49: Write a function that returns nothing and observe the default return value
function task49() {
    function doNothing() {
        // Does nothing
    }

    console.log("Task 49:");
    const result = doNothing();
    console.log("Default return value:", result);
    console.log();
}

// Task 50: Declare a function with default parameters and call it with different arguments
function task50() {
    function greetPerson(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }

    console.log("Task 50:");
    greetPerson("Alice");
    greetPerson();
    console.log();
}

// Execute all tasks
function main() {
    task41();
    task42();
    task43();
    task44();
    task45();
    task46();
    task47();
    task48();
    task49();
    task50();
}

main();