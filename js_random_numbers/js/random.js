// jshint esversion: 6

//Display an alert asking user to play
alert("Would you like to play a game? Click OK.");
alert("Please provide a low and high number between 10 and 25. Click OK to begin.");


// Collect input from a user
const inputLow = prompt("Please provide a low number");
const inputHigh = prompt("Please please provide a high number");


// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);


//Select the <main> HTML element
const main = document.querySelector("main");

//Check if lowNumber OR highNumber is not a number
if ( isNaN(lowNumber) && isNaN(highNumber) ) {
  main.innerHTML = 
    `<h2>You need to provide two numbers. Try again.<h2>`;
}
else {
//  Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;
  
  
//  Create a message displaying the random number
  main.innerHTML = 
    `<h2>${randomNumber} is a random number between ${lowNumber} and ${highNumber}.</h2> <p>Refresh browser to play again. Thank you!</p>`;
}