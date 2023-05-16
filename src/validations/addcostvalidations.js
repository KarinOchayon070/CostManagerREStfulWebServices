/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

const joi = require('joi');
const {categories } = require('../constants');

/* Creating a Joi schema for validating the add cost request.
Joi is a JavaScript library used for data validation. It provides an easy and declarative
way to define schemas and validate data against those schemas.*/
const addCostJoiSchema = joi.object({
    user_id: joi.number().min(1).required(),
    year: joi.number().min(1900).max(new Date().getFullYear()).required(),
    month: joi.number().min(1).max(12).required(),
    day: joi.number().min(1).max(31).required(),
    description: joi.string().required(),
    category: joi.string().valid(...categories).required(),
    sum: joi.number().greater(0).required()
});

module.exports = addCostJoiSchema;
