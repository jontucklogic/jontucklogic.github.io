// jshint esversion: 6

const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;
const daysPerYear = 365;

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

// Ask the user for their age
const yourage = prompt("What is your age?");

const yearsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerYear * yourage;
const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;

//  Select the <main> HTML element
const main = document.querySelector("main");

// Ouput results to the <main> element
main.innerHTML = 
`
<h2>There are ${secondsPerDay} seconds in a day</h2>
<p>You have been alive for more than <strong>${yearsAlive}</strong> seconds!</p>
`

// const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
// console.log(`There are ${secondsPerDay} seconds in a day.`);

// const yearsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerYear * yourage;
// console.log(`I've been alive for more than ${yearsAlive} seconds!`)