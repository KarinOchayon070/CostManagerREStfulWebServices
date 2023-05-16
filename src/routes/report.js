/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

const express = require("express");
const costsModel = require("../db/costsmodel"); 
const { categories } = require("../constants"); 
const reportValidations = require("../validations/reportvalidations"); 

// Creating an Express router for handling report requests.
const reportRouter = express.Router(); 

// Handling GET requests to the root path ("/") of the report route.
reportRouter.get("/", async (req, res, next) => { 
  try {
    // Validating the request query parameters using the report validations.
    const validations = reportValidations.validate(req.query); 
    // If there is a validation error set the status code to 400 (bad request) and throw error.
    if (validations.error) { 
      validations.error.status = 400; 
      throw validations.error; 
    }

    // Retrieving costs from the database based on the query parameters.
    const costs = await costsModel.find(req.query); 

    // If no costs are found set the status code to 400 (bad request) and throw error.
    if (!costs.length) { 
      validations.error.status = 400; 
      throw new Error("No costs found for this specific query"); 
    }

    /* Here is the implmention of the "computed" design pattern.
    This code demonstrates the computed design pattern by performing computations and
    transforming the retrieved costs data into a structured format (result object)
    that can be utilized for further processing or responding to client requests.*/

    // Creating an empty object to store the computed result.
    const result = {}; 
    // Iterating through each category and initializing an empty array for each category in the result object.
    categories.forEach((category) => { 
      result[category] = []; 
    });

    // Iterating through each cost and creating a cost item object with selected properties
    costs.forEach((cost) => { 
      const costItem = { 
        day: cost.day,
        sum: cost.sum,
        description: cost.description,
      };
      // Adding the cost item to the corresponding category array in the result object
      result[cost.category].push(costItem); 
    });
    // Sending a JSON response with the computed result and Pass any caught error to the error-handling middleware
    res.json(result); 
  } catch (error) {
    next(error);
  }
});

module.exports = reportRouter; 

