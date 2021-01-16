// jshint esversion: 6

/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctGuess = 0;


// 2. Store the rank of a player
let playerRank;


// 3. Select the <main> HTML element
const main = document.querySelector("main");


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const qone = prompt("Name a programming language that's also a gem.");
if (qone.toUpperCase() === "RUBY") {
	correctGuess += 1;
}

const qtwo = prompt("Name of programming language that's also a snake.");
if (qtwo.toUpperCase() === "PYTHON") {
	correctGuess += 1;
}

const qthree = prompt("What language do you use to style web pages?");
if (qthree.toUpperCase() === "CSS") {
	correctGuess += 1;
}

const qfour = prompt("What language do you use to build the strucutre of web pages?");
if (qfour.toUpperCase() === "HTML") {
	correctGuess += 1;
}

const qfive = prompt("What language do you use to add interactive to a web page");
if (qfive.toUpperCase() === "JAVASCRIPT") {
	correctGuess += 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correctGuess === 5) {
	playerRank = "Gold";
} else if (correctGuess >= 3) {
	playerRank = "Silver";
} else if (correctGuess >= 2) {
	playerRank = "Bronze";
} else {
	playerRank = "No Crown";
}


// 6. Output results to the <main> element
main.innerHTML = 
  `<h2>You got ${correctGuess} out of 5 questions correct.</h2> 
  <p>Crown earned: <strong>${playerRank}</strong></p>`;

