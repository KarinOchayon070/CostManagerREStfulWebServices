/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

/*
This code validates properties in the body object, including mandatory fields, numeric ranges,
and valid categories. If any validation errors occur, it throws an error.
The function is then exported.
*/

// Importing the "categories" object from the "../constants" file
const {categories } = require('../constants');

const addCostValidations = (body) =>{

    let error;

    // Destructures properties (user_id, year, month, day, description, category, sum) from the body object
    const { user_id, year, month, day, description, category, sum } = body;

     // Check if user_id is valid
    if(!user_id && user_id < 1){
        error = new Error("user_id is mandatory and must be a positive number");
    }

     // Check if year is valid
    if(!year || year < 1900 || year > new Date().getFullYear()){
        error = new Error("year is mandatory and must be a number between 1900 and current year");
    }

    // Check if month is valid
    if(!month || month < 1 || month > 12){
        error = new Error("month is mandatory and must be a number between 1 and 12");
    }

    // Check if day is valid
    if(!day || day < 1 || day > 31){
        error = new Error("day is mandatory and must be a number between 1 and 31");
    }

     // Check if description is valid
    if(!description){
        error = new Error("description is mandatory");
    }

     // Check if category is valid
    if(!category || !categories.includes(category)){
        error = new Error("category is mandatory and must be one of the following: " + categories.join(", "));
    }

     // Check if sum is valid
    if(!sum || sum < 0){
        error = new Error("sum is mandatory and must be a positive number");
    }

    if(error){
        error.status = 400;
        throw error;
    }
}

// Exporting the addCostValidations function as a module
module.exports = addCostValidations;
