/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

const express = require("express");
const costsModel = require("../db/costsmodel"); 
const usersModel = require("../db/usersmodel"); 
const addCostValidations = require("../validations/addcostvalidations"); 

// Creating an Express router for handling add cost requests.
const addCostRouter = express.Router(); 

// Handling POST requests to the root path ("/") of the add cost route.
addCostRouter.post("/", async (req, res, next) => { 
  // Extracting the user_id from the request body.
  const { user_id } = req.body; 

  try {
    // Validating the request body using the add cost validations.
    const validations = addCostValidations.validate(req.body); 

    // If there is a validation error Set the status code to 400 (bad request) and throw the validation error.
    if (validations.error) { 
      validations.error.status = 400; 
      throw validations.error; 
    }

    // Checking if the user exists in the database
    const isUserExist = await usersModel.exists({ user_id }); 

    // If the user does not exist create new error object and set the status code to 400 (bad request)
    if (!isUserExist) { 
      const error = new Error("User does not exist"); 
      error.status = 400; 
      throw error; 
    }

    // Create a new cost document based on the request body and save it to the database
    const cost = await new costsModel(req.body).save(); 

    // Send a JSON response with the saved cost document and pass any caught error to the error-handling middleware
    res.json(cost); 
  } catch (error) {
    next(error); 
  }
});

module.exports = addCostRouter; 
