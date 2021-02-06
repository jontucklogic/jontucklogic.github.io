/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'When we’re talking about diversity, it’s not a box to check. It is a reality that should be deeply felt and held and valued by all of us.',
    source: 'Ava DuVernay',
    profession: 'American filmmaker',
  },
  {
    quote: 'I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality…. I believe that unarmed truth and unconditional love will have the final word.',
    source: 'Martin Luther King, Jr.',
    profession: 'American Baptist minister and Civil Rights activist',
  },
  {
    quote: 'The cost of liberty is less than the price of repression.',
    source: 'W.E.B. Du Bois',
    profession: 'Sociologist, socialist, historian, civil rights activist',
    citation: 'John Brown: A Biography',
    year: '1909'
  },
  {
    quote: 'In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.',
    source: 'Thurgood Marshall',
    profession: 'First African American U.S. Supreme Court member',
    year: '1972'
  },
  {
    quote: 'Hate is too great a burden to bear. It injures the hater more than it injures the hated.',
    source: 'Coretta Scott King',
    profession: 'Author, activist, civil rights leader',
  },
  {
    quote: 'The need for change bulldozed a road down the center of my mind.',
    source: 'Maya Angelou',
    profession: 'Poet, memoirist, and civil rights activist',
  },
  {
    quote: 'Truth is powerful and it prevails.',
    source: 'Sojourner Truth',
    profession: 'Abolitionist and women\'s rights activist',
  },
  {
    quote: 'Never be limited by other people\’s limited imaginations.',
    source: 'Dr. Mae Jemison',
    profession: 'First African-American female astronaut',
  },
  {
    quote: 'The soul that is within me no man can degrade.',
    source: 'Frederick Douglass',
    profession: 'Social reformer, abolitionist, orator, writer, and statesman',
  },
  {
    quote: 'I don\’t want a Black History Month. Black history is American history.',
    source: 'Morgan Freeman',
    profession: 'Actor, director and narrator',
  },
  {
    quote: 'I swear to the Lord I still can\’t see why democracy means everybody but me.',
    source: 'Langston Hughes',
    profession: 'Poet, social activist, novelist, playwright, and columnist ',
  }
]

// Randomly selects a quote from the array and return it
function getRandomQuote() {
  // Generates a random number starting at 0 and going to the end of the quotes array
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // Uses random number to get item from the array
  const randomQuote = quotes[randomNumber];

  return randomQuote
}

// Returns random color value -- Found at https://css-tricks.com/snippets/javascript/random-hex-color/
function setBg() {
  const randomNumber = Math.floor(Math.random() * 16777215).toString(16);
  const hexValue = `#${randomNumber}`;

  return hexValue;
}

// The quote on the page automatically updates at regular intervals.
function changeBackground(hexColor) {
  document.body.style.backgroundColor = hexColor;
}


function printQuote() {
  // Calls the change background with the returned hex value from the setBg function
  changeBackground(setBg());

  // Calls the get random quote function and prints quote to page using template provided
  const randomQuote = getRandomQuote();

  // Creating the HTML that will be changing each time this function is called
  let displayQuote = `<p class='quote'>${randomQuote.quote}</p>`;
  displayQuote += `<p class='source'><strong>${randomQuote.source}</strong>`;
  displayQuote += `<span class='profession'> ${randomQuote.profession}</span>`;
  if (randomQuote.citation) {
    displayQuote += ` <span class='citation'>${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    displayQuote += ` <span class='year'>${randomQuote.year}</span>`;
  }
  displayQuote += `</p>`;

  // Changes the HTML to the string above
  document.getElementById('quote-box').innerHTML = displayQuote;
}

// Auto-refreshed quotes at 15 second intervals. (https://stackoverflow.com/questions/18070659/run-javascript-function-at-regular-time-interval)
function autoGenerate() {
  setInterval(printQuote, 15000);
}

autoGenerate();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);