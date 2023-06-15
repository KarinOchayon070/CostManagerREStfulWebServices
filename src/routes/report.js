/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

const express = require("express");
const costsModel = require("../models/costsmodel"); 
const { categories } = require("../constants"); 
const reportValidations = require("../validations/reportvalidations"); 

// Creating an Express router for handling report requests
const reportRouter = express.Router(); 

// Handling GET requests to the root path ("/") of the report route
reportRouter.get("/", async (req, res, next) => { 
  try {
    // Validating the request query parameters using the report validations. if there is an error throws the error
     reportValidations(req.query); 
    // Retrieving costs from the database based on the query parameters
    const costs = await costsModel.find(req.query); 


    /* Here is the implementation of the "computed" design pattern.
    This code demonstrates the computed design pattern by performing computations and
    transforming the retrieved costs data into a structured format (result object)
    that can be utilized for further processing or responding to client requests.*/

    // Creating an empty object to store the computed result
    const result = {}; 
    // Iterating through each category and initializing an empty array for each category in the result object
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

    if (costs.length === 0) {
      // User not found, return an error response
      const errorResponse = {
        error: "User not found",
      };
      return res.status(404).json(errorResponse);
    }

    // Sending a JSON response with the computed result and Pass any caught error to the error-handling middleware
    res.json(result); 
  } catch (error) {
    next(error);
  }
});

module.exports = reportRouter; 

