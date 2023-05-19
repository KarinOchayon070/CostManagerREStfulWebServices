/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/
/* Creating a Joi schema for validating the repoer request.
Joi is a JavaScript library used for data validation. It provides an easy and declarative
way to define schemas and validate data against those schemas.*/
const reportValidations = (query) =>{
    let error;
    const { user_id, year, month } = query;

    if(!user_id && user_id < 1){
        error = new Error("user_id is mandatory and must be a positive number");
    }

    if(!year || year < 1900 || year > new Date().getFullYear()){
        error = new Error("year is mandatory and must be a number between 1900 and current year");
    }

    if(!month || month < 1 || month > 12){
        error = new Error("month is mandatory and must be a number between 1 and 12");
    }

    if(error){
        error.status = 400;
        throw error;
    }
}

module.exports = reportValidations;
