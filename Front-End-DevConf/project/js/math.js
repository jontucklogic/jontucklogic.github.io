const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;
const daysPerYear = 365;
const myAge = 47;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerYear * myAge;
console.log(`I've been alive for more than ${yearsAlive} seconds!`)