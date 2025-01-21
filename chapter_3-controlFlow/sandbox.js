// For loop
// Loops from 0 to 4, incrementing i by 1 each time
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i); // Prints the current value of i on each iteration
}

// While loop
// Keeps running as long as i is less than 5
let i = 0;
while (i < 5) {
    console.log('in loop:', i); // Prints the current value of i
    i++; // Increment i on each iteration
}

// Do-while loop
// Executes the block of code at least once, then checks the condition
let x = 0;
do {
    console.log('x is', x); // Prints the current value of x
    x++; // Increment x
} while (x < 2); // Continues looping until x is 2 or greater

// If statements
// Conditional checks based on the password's length and content
const password = 'eragontyson';

if (password.length >= 2 && password.includes('y')) {
    console.log("password is long enough"); 
} else if (password.length > 2 && password.length < 10) {
    console.log("password is middle size"); 
} else {
    console.log("password is huge"); 
}

// Logical NOT (!)
// Reverses the boolean value: !true becomes false, !false becomes true
let user = false;

console.log(!true); // Prints false, because !true is false

if (user) {
    console.log('user is true'); // This won't run because user is false
}

if (!user) {
    console.log('user is false'); // This runs, because !false is true
}

// Break and continue
// Continue skips the current iteration and moves to the next one, while break stops the loop entirely
const grades = [0, 1, 10, 3, 2, 8];

for (let i = 0; i < grades.length; i++) {

    if (grades[i] === 1) {
        console.log("grade 1"); // Prints when grade is 1
        continue; // Skip the rest of the loop for this iteration
    }

    console.log('your grade: ', grades[i]); // Prints the current grade

    if (grades[i] === 10) {
        console.log("you got the highest grade!"); // Prints when grade is 10
        break; // Stops the loop when grade is 10
    }
}

// Switch statement
// Switch case checks a value and runs the matching case block, then exits after 'break' or runs the default case
let topGrades = 'A';

switch (topGrades) {
    case 'A':
        console.log('You got an A'); // If topGrades is 'A'
        break; // Breaks out of the switch after the case matches
    case 'B':
        console.log('You got a B'); // If topGrades is 'B'
        break;
    default:
        console.log('not a valid grade'); // Runs if no cases match
}

// Variables and block scope
// let restricts the scope of the variable to the block it is in, preventing redeclaration within the same scope
let scope = 30;

if (true) {
    let scope = 40; // This is a new scope inside the block
    let name = 'rafa'; // Declares a new variable 'name' inside this block
    console.log('inside the code block: ', scope, name); // Prints the values inside the block

    if (true) {
        let scope = 50; // This is a new scope inside the nested block
        console.log('inside the second code block', scope); // Prints 50, inside the nested block
    }
}

console.log('outside the code block ', scope, name); // Prints 'outside the code block 30 undefined' because name is not accessible outside the block

