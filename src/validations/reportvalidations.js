/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/
const joi = require('joi');

/* Creating a Joi schema for validating the repoer request.
Joi is a JavaScript library used for data validation. It provides an easy and declarative
way to define schemas and validate data against those schemas.*/
const reportValidations = joi.object({
    user_id: joi.number().min(1).required(),
    year: joi.number().min(1900).max(new Date().getFullYear()).required(),
    month: joi.number().min(1).max(12).required(),
});

module.exports = reportValidations;
