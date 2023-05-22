/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

const express = require("express");
const costsModel = require("../models/costsmodel"); 
const usersModel = require("../models/usersmodel"); 
const addCostValidations = require("../validations/addcostvalidations"); 
const { generateRandomId } = require("../utils");

// Creating an Express router for handling add cost requests
const addCostRouter = express.Router(); 

// Handling POST requests to the root path ("/") of the add cost route
addCostRouter.post("/", async (req, res, next) => { 
  // Extracting the user_id from the request body
  const { user_id } = req.body; 

  try {
    // Validating the request body using the add cost validations. if there is an error throws the error
    addCostValidations(req.body) 

    // Checking if the user exists in the database (check for the existence of the id that matches the user_id provided in the request body)
    const isUserExist = await usersModel.exists({ id: user_id }); 

    // If the user does not exist create new error object and set the status code to 400 (bad request)
    if (!isUserExist) { 
      const error = new Error("User does not exist"); 
      error.status = 400; 
      throw error; 
    }

    let id = generateRandomId();

    let isIdExists = await costsModel.exists({ id });

    while (isIdExists) {
      id = generateRandomId();
      isIdExists = await costsModel.exists({ id });
    }


    // Create a new cost document based on the request body and save it to the database
    const cost = await new costsModel({...req.body, id}).save(); 

    // Send a JSON response with the saved cost document and pass any caught error to the error-handling middleware
    res.json(cost); 
  } catch (error) {
    next(error); 
  }
});

module.exports = addCostRouter; 
