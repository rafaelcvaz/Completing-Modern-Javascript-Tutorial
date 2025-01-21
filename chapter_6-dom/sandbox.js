// DOM query selectors

// Selecting the first <p> element on the page
const para = document.querySelector('p');
const paraError = document.querySelector('.error'); // Selects the first element with class 'error'

// Modifying the first paragraph's text
para.innerText = 'ninjas are awesome'; // Changes the text of the selected <p> to "ninjas are awesome"

// Adding the 'error' class to the first paragraph to apply styles defined in CSS
para.classList.add('error'); // Adds the 'error' class to the first <p>

// Selecting all <p> elements on the page
const paras = document.querySelectorAll('p');
console.log(paras[0]); // Logs the first <p> element

// Get an element by ID

// Selecting an element by its ID
const title = document.getElementById('page-title');
console.log(title); // Logs the element with the ID 'page-title'

// Get elements by class name
const errors = document.getElementsByClassName('error');
console.log(errors); // Logs the elements with the class 'error'

// Get elements by tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // Logs all <p> elements as a collection

// Selecting the first <p> element again using querySelector
const paragraph = document.querySelector('p');
console.log(paragraph.innerText); // Logs the text content of the first <p> element

// Modify the text of the first <p> element
// paragraph.innerText = 'ninjas are awesome';

// Log the modified text content again
console.log(paragraph.innerText);

// Using forEach to loop through all paragraphs and log their text
paras.forEach(paragraph => {
    console.log(paragraph.innerText); // Logs the text content of each <p> element
    paragraph.innerText += ' new text'; // Appends ' new text' to the existing text in each <p>
});

// document.innerHTML

// Selecting a link <a> element
const link = document.querySelector('a');

// Using getAttribute and setAttribute to get and modify HTML attributes
console.log(link.getAttribute('href')); // Logs the href attribute of the first <a> link
link.setAttribute('href', 'https://www.newlink.com'); // Changes the href attribute to a new URL

// Selecting an <h1> element
const titleH1 = document.querySelector('h1');
console.log(titleH1.style.color); // Logs the current color style of the <h1> element

// Modifying the color of the <h1> element
titleH1.style.color = 'red'; // Sets the color of the <h1> element to red
console.log(titleH1.style.color); // Logs the new color (red)

// Using classList to manipulate classes of a link
// link.classList.add('active'); // Adds 'active' class
// link.classList.remove('inactive'); // Removes 'inactive' class
// link.classList.toggle('highlight'); // Togglee the 'highlight' class

// .innerText vs .textContent
// textContent gets all of the text inside the element, including hidden text like in <span style="display: none">error</span>
// innerText does not include hidden text from elements like <span style="display: none">
console.log(paragraph.textContent); // Logs all text content inside the paragraph, including hidden text
