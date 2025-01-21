// Functions

// Function Declaration
// This function is hoisted, meaning it can be called before it's defined in the code
function greet() {
    console.log('hi!'); // Simply logs 'hi!' when called
}

greet(); // Calling the greet function, this will log 'hi!'

// Function Expression
// This function is assigned to a variable and is not hoisted, meaning you must define it before calling it
const speak = function() {
    console.log('good day'); 
};

speak(); // Calling the function assigned to the 'speak' variable

// Arguments and Parameters

// Function with a parameter 'name' that logs a greeting with the name
const talk = function(name) {
    console.log(`good day ${name}`); // Uses template literal to greet the name passed
};

talk('rafa'); // Passing 'rafa' as an argument, it will log 'good day rafa'

// Function with a default parameter (time defaults to 'morning' if no argument is passed)
const greeting = function(time = 'morning') {
    console.log(`good ${time}`); // Logs the greeting based on the time (morning by default)
}

greeting(); // No argument passed, so it defaults to 'morning' and logs 'good morning'
greeting('night'); // Passing 'night' as an argument, it logs 'good night'

// Returning values

// Function that calculates area of a circle using the radius
const calcArea = function(radius) {
    return 3.14 * radius**2; // Formula for area of a circle (π * radius^2)
};

const area = calcArea(5); // Calling calcArea with a radius of 5
console.log(area); // Prints the calculated area of the circle (78.5)

// Arrow functions
// Shorter syntax for functions, especially useful for single-line functions

// Arrow function with parentheses for the parameter
const calcArea2 = (radius) => {
    return 3.14 * radius**2; // Same as the previous calcArea function, but with arrow syntax
};

const area2 = calcArea2(5); // Calling the arrow function
console.log(area2); // Prints the area

// Arrow function with a single parameter doesn't need parentheses, and single-line functions don't need 'return' keyword
const calcArea3 = radius => 3.14 * radius**2; // One-liner function without curly braces or return

const area3 = calcArea3(5); // Calling the simpler arrow function
console.log(area3); // Prints the area

// Arrow function that returns a string immediately
const greet5 = () => 'hello, world'; // Just returns 'hello, world' when called
const printGreeting = greet5(); // Calling greet5 and storing the return value
console.log(printGreeting); // Prints 'hello, world'

// Arrow function with more logic (for calculating total with products and tax)
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax; // Adds product price and tax for each item
    }
    return total; // Returns the total cost after applying tax to all products
};

console.log(bill([10, 15, 30], 0.2)); // Calls bill with an array of prices and a tax rate (0.2), prints the total

// Methods

// Example of calling a method on a string
const name2 = 'rafa'; // Declaring a string
let upperName = name2.toUpperCase(); // Using toUpperCase method to convert the string to uppercase
console.log(upperName); // Prints 'RAFA'

// Callback functions

// Callback function example: passing a function as an argument
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value); // Executes the callback function with value as argument
}

myFunc(value => {
    console.log(value); // Prints the value passed from myFunc (50)
});

// Callbacks & foreach

// forEach method goes through each element of an array and applies a callback function to each. 
// When you add parameters to this callback functions, the first one is the value inside each position of the array, and the second one is the index
let people = ['rafa', 'marcos', 'mari', 'bia'];

people.forEach((person, index) => {
    console.log(person, index); // Logs the name and index of each person in the array
});

// Defining a function to log a greeting message with the index
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`); // Logs the index and person name in a greeting
};

people.forEach(logPerson); // Passes the logPerson function as a callback to forEach
