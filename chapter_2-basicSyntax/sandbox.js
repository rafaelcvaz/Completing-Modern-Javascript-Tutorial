// Strings

// Example of using single and double quotes for strings
console.log('single quotes', "double quoted string");

// Storing a string in a variable
let name = "rafa";
console.log(name);

// String concatenation: combining two strings into one
let firstName = "Rafa";
let lastName = "Vaz";
let fullName = firstName + ' ' + lastName; // Concatenating first and last name with a space
console.log(fullName);

// Getting a specific character from a string by index (starts at 0)
console.log(fullName[0]);

// Getting the length of the string
console.log(fullName.length);

// Using string methods

// Converting string to uppercase
console.log(fullName.toUpperCase());

// Finding the index of a character or substring
let index = 'rafael.vaz@gabriel.com.br'.indexOf('@');
console.log(index); // Should return the index position of '@'

// Concatenating strings with variables in a traditional way
const title = 'Best movies of 2024';
const author = 'Mario';
const likes = 30;
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(result);

// Template string: a cleaner way to do string concatenation using backticks and ${} for variables
let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);

// Creating a simple HTML template using template strings
let html = `
    <h2>${title}</h2>
    <p> By ${author}</p>
    <span>This blog has ${likes} likes </span>
`; 
console.log(html);

// Arrays

// Arrays hold multiple values in a single variable
let ninjas = ['shaun', 'ruy', 'chun-li'];
console.log(ninjas[0]); // Accessing the first element in the array

let ages = [20, '25', 30]; // You can mix data types in an array
console.log(ages, ages.length); // Checking the array and its length

// Array methods

// Joining array elements into a single string, separated by commas
let result3 = ninjas.join(',');
console.log(result3); 

// Finding the index of an item in the array
let result4 = ninjas.indexOf('ruy');
console.log(result4); // Will return the index of 'ruy' (1)

// Concatenating arrays (doesn't modify the original array)
let result5 = ninjas.concat(['key', 'cristal']);
console.log(result5);

// Adding a new item to the end of the array (modifies the original array)
let result6 = ninjas.push('ken');
console.log(result6);

// Removing the last item from the array (modifies the original array)
let result7 = ninjas.pop();
console.log(result7);

// Null and undefined

// A variable that is declared but not assigned a value is 'undefined'
let age;
console.log(age, age + 3, `the age is ${age}`); // Will print undefined

// A variable explicitly set to 'null' has no value (used for empty or non-existent values)
let age2 = null;
console.log(age2, age2 + 3, `the age is ${age2}`); // Will print null

// Booleans

// Checking if an email includes the '@' symbol and if an array contains a specific item
let email = 'rafael.vaz@usp.br'
let names = ['rafa', 'mari'];
let include = email.includes('@'); // Returns true if '@' is in the string
let includes = names.includes('rafa'); // Returns true if 'rafa' is in the array
console.log(include, includes);

// Comparison operators

// Comparison of values (==) and checking if one string is 'greater' than another (lexicographically)
let sex = 'male';
console.log(sex == 'male'); // true, because the value is the same
console.log(sex > 'Male'); // true, because 'm' is lexicographically greater than 'M'

// Loose comparison (==) only checks for equality of values, not types
let age3 = 25;
console.log(age3 == 25); // true, because the value is the same

// Strict equality (===) checks both the value and the type
console.log(age3 === '25'); // false, because one is a number and the other is a string

// Type conversion

// Converting a string to a number
let score = '0';
console.log(score + 1); // Will print '01' because the string is concatenated

score = Number(score); // Now score is a number
console.log(score + 1); // Will print 1, as it's a number now
console.log(typeof score); // Will show 'number'

console.log(Boolean(score)); // Converts to a boolean (0 becomes false)
console.log(Boolean(0)); // Will print false because 0 is falsy
