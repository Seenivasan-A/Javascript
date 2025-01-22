 // Task 1: Display "Hello, World!" using an alert
 console.log("Hello, World!");

 // Task 2: Experiment with different data types
 let myString = "Hello, JavaScript!";
 let myNumber = 42;
 let myBoolean = true;
 console.log("Task 2:");
 console.log("String:", myString);
 console.log("Number:", myNumber);
 console.log("Boolean:", myBoolean);
 
 // Task 3: Perform basic math operations
 console.log("Task 3:");
 console.log("Addition:", 5 + 3);
 console.log("Subtraction:", 10 - 4);
 console.log("Multiplication:", 6 * 7);
 console.log("Division:", 20 / 4);
 
 // Task 4: Concatenate two strings
 let firstName = "John";
 let lastName = "Doe";
 let fullName = firstName + " " + lastName;
 console.log("Task 4: Full Name:", fullName);
 
 // Task 5: Use typeof to check data types
 console.log("Task 5:");
 console.log("Type of myString:", typeof myString);
 console.log("Type of myNumber:", typeof myNumber);
 console.log("Type of myBoolean:", typeof myBoolean);
 console.log("Type of undefined variable:", typeof undefined);
 console.log("Type of null value:", typeof null);
 
 // Task 6: Multi-line and single-line comments
 
 // Single-line comment: Used for brief notes or explanations.
 
 /*
 Multi-line comment:
 Used for detailed explanations or to temporarily disable code.
 */
 
 // Task 7: Semicolon-separated and non-separated lines
 console.log("Task 7:");
 let a = 5; let b = 10; console.log("Semicolon-separated sum:", a + b);
 
 let x = 20
 let y = 30
 console.log("Non-separated sum:", x + y);
 
 // Task 8: Properly formatted nested loop
 console.log("Task 8:");
 for (let i = 1; i <= 3; i++) {
     console.log(`Outer loop iteration: ${i}`);
     for (let j = 1; j <= 2; j++) {
         console.log(`  Inner loop iteration: ${j}`);
     }
 }
 
 // Task 9: Declare multiple variables in a single line
 let personName = "Alice", age = 25, isStudent = true, city = "New York";
 console.log("Task 9: Multiple Variables:");
 console.log(personName, age, isStudent, city);
 
 // Task 10: Script placement in HTML
 console.log("Task 10:");
 console.log(`
 Script Placement in HTML:
 
 1. Placing a script at the top may cause errors if it tries to access
    DOM elements that haven't been loaded yet.
 
 2. Placing a script at the bottom ensures all DOM elements are available
    before the script runs.
    
 
 `);