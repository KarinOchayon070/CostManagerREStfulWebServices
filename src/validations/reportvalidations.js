const joi = require('joi');

const reportValidations = joi.object({
    user_id: joi.number().min(1).required(),
    year: joi.number().min(1900).max(new Date().getFullYear()).required(),
    month: joi.number().min(1).max(12).required(),
});

module.exports = reportValidations;
