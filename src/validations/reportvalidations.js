/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

/*
This code defines a function that validates a query object's properties (user_id, year, and month).
If any validation errors occur, it throws an error with a corresponding message.
The function is then exported.
*/

const reportValidations = async (query) => {
    let error;
    // Destructures the properties user_id, year, and month from the query object
    const { user_id, year, month } = query;
  
    // Check if user_id is valid
    const usersModel = require("../models/usersmodel");
    const userExists = await usersModel.exists({ id: user_id });
    if (!userExists || user_id < 1) {
      error = new Error("user not found or user_id is mandatory and must be a positive number");
    }
  
    // Check if year is valid
    if (!year || year < 1900 || year > new Date().getFullYear()) {
      error = new Error("year is mandatory and must be a number between 1900 and current year");
    }
  
    // Check if month is valid
    if (!month || month < 1 || month > 12) {
      error = new Error("month is mandatory and must be a number between 1 and 12");
    }
  
    if (error) {
      error.status = 400;
      throw error;
    }
  };
  
  module.exports = reportValidations;
  