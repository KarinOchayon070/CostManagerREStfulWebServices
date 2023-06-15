/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

/*
This code defines a function named generateRandomId that generates a random ID between 0 and
999999 (inclusive) using the Math.random() and Math.floor() functions.
It exports the generateRandomId function so that it can be used by other modules.
*/

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000);
};

// Exporting the "generateRandomId" function as a module
module.exports = { generateRandomId };
