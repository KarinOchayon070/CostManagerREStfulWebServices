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

    
  // Check if the user exists in the usersmodel based on the user_id provided in the request query
  const userExists = await usersModel.exists({ user_id: req.query.user_id });

  // If the user does not exist
  if (!userExists) {
  // Create an error response object with the message "User not found"
    const errorResponse = {
      error: "User not found",
  };

  // Set the response status code to 404 (Not Found) and send the error response as JSON
  return res.status(404).json(errorResponse);
}
  

    // Sending a JSON response with the computed result and Pass any caught error to the error-handling middleware
    res.json(result); 
  } catch (error) {
    next(error);
  }
});

module.exports = reportRouter; 

