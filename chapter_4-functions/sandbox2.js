// Selecting the 'ul' element with the class 'people' from the DOM
const ul = document.querySelector('.people');

// Creating an array with names of people
const people = ['rafa', 'mari', 'bia', 'mama'];

// Initialize an empty string to build the HTML list items
let html = ``;

// Loop through the 'people' array using forEach
people.forEach(person => {
    // For each person, add a list item ('<li>') with a purple text color to the HTML string
    html += `<li style="color: purple">${person}</li>`; 
});

// Log the generated HTML string to the console (for debugging or previewing)
console.log(html);

// Set the innerHTML of the 'ul' element to the generated HTML string
ul.innerHTML = html; // This will display the list of names in the 'ul' on the page
