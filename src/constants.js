/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

/*
This code is exporting an array called "categories" containing different category names.
The purpose of exporting this array is to make it available for other modules to use and
reference these predefined categories.
By exporting the "categories" array, other parts of the application can import and utilize
it as needed.
*/
const categories = ["food", "health", "housing", "sport", "education", "transportation", "other"];


// Exporting the "categories" object as a module
module.exports = { categories };
