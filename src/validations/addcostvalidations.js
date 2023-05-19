/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/
const {categories } = require('../constants');

const addCostValidations = (body) =>{
    let error;
    const { user_id, year, month, day, description, category, sum } = body;

    if(!user_id && user_id < 1){
        error = new Error("user_id is mandatory and must be a positive number");
    }

    if(!year || year < 1900 || year > new Date().getFullYear()){
        error = new Error("year is mandatory and must be a number between 1900 and current year");
    }

    if(!month || month < 1 || month > 12){
        error = new Error("month is mandatory and must be a number between 1 and 12");
    }

    if(!day || day < 1 || day > 31){
        error = new Error("day is mandatory and must be a number between 1 and 31");
    }

    if(!description){
        error = new Error("description is mandatory");
    }

    if(!category || !categories.includes(category)){
        error = new Error("category is mandatory and must be one of the following: " + categories.join(", "));
    }

    if(!sum || sum < 0){
        error = new Error("sum is mandatory and must be a positive number");
    }

    if(error){
        error.status = 400;
        throw error;
    }
}

module.exports = addCostValidations;
