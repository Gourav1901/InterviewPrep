// Hoisting and Temporal Dead Zone (TDZ)
// Hoisting:

// In JavaScript, variables declared with var, let, and const are hoisted. This means their declarations are moved to the top of their containing scope during the compile phase.
// However, variables declared with let and const are not initialized until their actual declaration is reached in the code. This period between the start of the block and the actual declaration is called the Temporal Dead Zone (TDZ).
// Temporal Dead Zone (TDZ):

// You cannot use variables declared with let and const before their declaration in the code. Trying to do so results in a reference error.
// This is because let and const are stored in a different memory location than the global execution context (GES).
// Variable Declarations and Scope
// Variable Strictness:

// var is the least strict.
// let is stricter than var.
// const is the strictest.
// Characteristics:

// var:
// No Temporal Dead Zone.
// Can be redeclared and re-initialized.
// Stored in the Global Execution Context (GES).
// let:
// Has a Temporal Dead Zone.
// Cannot be redeclared.
// Can be re-initialized.
// Stored in a separate memory area.
// const:
// Has a Temporal Dead Zone.
// Cannot be redeclared.
// Cannot be re-initialized.
// Stored in a separate memory area.
// Errors
// Syntax Error:

// This occurs when there is a violation of JavaScript syntax rules. It's similar to a compile-time error in other languages.
// Type Error:

// This occurs at runtime when you try to perform an operation on a value of the wrong type, such as trying to re-initialize a const variable.
// Reference Error:

// This occurs at runtime when you try to access a variable that hasn’t been declared in the accessible scope.
// Summary
// Hoisting lifts declarations to the top, but let and const remain uninitialized until their declaration, creating the Temporal Dead Zone.
// var, let, and const have different rules regarding redeclaration and initialization.
// Errors: Syntax errors occur during compilation, while type and reference errors occur during runtime.



// Things learned:
// 1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
// 2. Temporal Dead Zone exists until variable is declared and assigned a value.
// 3. window.variable OR this.variable will not give value of variable defined using let or const.
// 4. We cannot redeclare the same variable with let/const(even with using var the second time).
// 5. const variable declaration and initialisation must be done on the same line.
// 6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
// 7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
// 8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.