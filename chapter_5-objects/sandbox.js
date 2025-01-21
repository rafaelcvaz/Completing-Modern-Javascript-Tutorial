// Objects --> properties (key-value pairs) and methods
// An object can store multiple values and functions, called methods. Properties are key-value pairs, and methods are functions that works on objects.

// Array of song objects with 'title' and 'artist' as properties
const songs = [
    { title: 'see you again', artist: 'tyler' },
    { title: 'solidão de volta', artist: 'terno rei' }
];

console.log(songs); // Prints the songs array with each song object

// User object with properties like name, songs, age, email, and methods like login() and logSongs()
let user = {
    name: 'marcos',
    songs: [
        { title: 'see you again', artist: 'tyler' },
        { title: 'solidão de volta', artist: 'terno rei' }
    ],
    age: 22,
    email: 'tivequemudar@gabriel.com.br',
    // Method to simulate user login
    login() {
        console.log('the user logged in'); // Logs a message when user logs in
    },
    // Method to log the songs the user likes
    logSongs() {
        console.log('she likes: ');
        this.songs.forEach(song => { //this. refers to the object to whom this block code belongs to, that's why we can access .songs from it.
            console.log(song.title, song.artist); // Logs each song's title and artist
        });
    }
};

console.log(user); // Prints the user object with all properties and methods
console.log(user.name); // Accessing the 'name' property directly

user.age = 35; // Updating the age property
console.log(user.age); // Prints the updated age (35)

console.log(user['name']); // Accessing the 'name' property using bracket notation

const key = 'email'; // Storing property name in a variable
console.log(user[key]); // Using variable to access the 'email' property

console.log(typeof(user)); // Logs the type of the 'user' object (object)

user.login(); // Calling the 'login' method on the 'user' object

const myName = 'rafa';
myName.toUpperCase(); // Calling the toUpperCase method on the string 'rafa' (note: no output because it's not stored or logged)

user.logSongs(); // Calling the 'logSongs' method, which logs all songs the user likes


// Math Object

console.log(Math.PI); // Logs the value of PI (π)

const area = 7.7;

// Various rounding methods in Math object
console.log(Math.round(area)); // Rounds to the nearest integer (8)
console.log(Math.floor(area)); // Rounds down to the nearest integer (7)
console.log(Math.ceil(area)); // Rounds up to the nearest integer (8)
console.log(Math.trunc(area)); // Removes decimal part, truncating to (7)

// Random numbers

const random = Math.random(); // Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(random); // Prints the random number

console.log(Math.round(random * 100)); // Multiplies the random number by 100 and rounds it to get a random integer between 0 and 100


// Primitive and reference types

// Primitive types are copied by value (e.g., numbers, strings, booleans)
let scoreOne = 50;
let scoreTwo = scoreOne; // scoreTwo gets a copy of scoreOne's value

console.log(`scoreOne = ${scoreOne}`, `scoreTwo = ${scoreTwo}`); // Both are 50

// Reference types are copied by reference (e.g., objects, arrays)
let userOne = { name: 'rafa', age: 23 };
let userTwo = userOne; // userTwo now refers to the same object as userOne

console.log(`ageOne = ${userOne.age}`, `ageTwo = ${userTwo.age}`); // Both will show 23

// Changing a property of userOne will also affect userTwo, since both point to the same object
userOne.age = 22;

console.log(`ageOne = ${userOne.age}`, `ageTwo = ${userTwo.age}`); // Both will now show 22 because they refer to the same object
