// Task 11: Without "use strict"
console.log("Task 11: Without 'use strict'");
undeclaredVariable = "This works without strict mode"; 
console.log(undeclaredVariable); 

// Task 12: Enable "use strict"
console.log("\nTask 12: With 'use strict'");
"use strict";
try {
  undeclaredStrictVariable = "This will throw an error"; 
} catch (error) {
  console.log(error.message); 
}
// Task 13: Delete a variable, function, or function parameter in "use strict"
console.log("\nTask 13: Deleting a variable, function, or function parameter in 'use strict'");
"use strict";
var myVariable = "Cannot delete me";
function myFunction(param) {
  return param;
}
try {
  delete myVariable; 
} catch (error) {
  console.log("Cannot delete variable:", error.message);
}
try {
  delete myFunction; 
} catch (error) {
  console.log("Cannot delete function:", error.message);
}
try {
  delete myFunction.length; 
} catch (error) {
  console.log("Cannot delete function parameter:", error.message);
}

// Task 14: Assign a value to an undeclared variable
console.log("\nTask 14: Assigning to an undeclared variable");
try {
  undeclaredVariableWithoutStrict = "Allowed without strict mode";
  console.log(undeclaredVariableWithoutStrict);
} catch (error) {
  console.log(error.message);
}

"use strict"; 
try {
  undeclaredVariableWithStrict = "Not allowed with strict mode"; 
} catch (error) {
  console.log(error.message); }

// Task 15: Declare a variable with a reserved keyword
console.log("\nTask 15: Using a reserved keyword as a variable name in 'use strict'");
"use strict";
try {
  var let = "Reserved keyword"; 
} catch (error) {
  console.log(error.message); 
}

// Task 16: Declare variables using let, const, and var, and discuss when each should be used
let myLetVariable = "This is a let variable";  
const myConstVariable = "This is a const variable"; 
var myVarVariable = "This is a var variable";  
console.log(myLetVariable); 
console.log(myConstVariable); 
console.log(myVarVariable);


// Task 17: Attempt to reassign a const variable
try {
  myConstVariable = "Attempting reassignment"; 
} catch (error) {
  console.log("Error:", error.message);  
}

// Task 18: Declare a variable without initializing it and print its value
let uninitializedVariable;
console.log(uninitializedVariable); 

// Task 19: Assign a number, string, and boolean value to a variable and print its type using typeof
let numberValue = 42;
let stringValue = "Hello, world!";
let booleanValue = true;

console.log(typeof numberValue); 
console.log(typeof stringValue); 
console.log(typeof booleanValue); 

// Task 20: Rename a variable and observe the outcome
let originalName = "This is the original name";
let renamedVariable = originalName; 

console.log(renamedVariable); 
console.log(originalName);  