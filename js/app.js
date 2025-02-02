// Log a message to the console
console.log("hello");

// Change the text content of the h1 element
document.querySelector('h1').textContent = "Welcome to My Web Page";

// Change the text content of the paragraph element
document.querySelector('p').textContent = "This is the updated paragraph of my webpage.";

// Add a click event listener to the h1 element
document.querySelector('h1').addEventListener('click', function() {
  alert("You clicked the heading!");
});
