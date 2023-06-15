/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

// Importing the Express library to create an Express application
const express = require("express");

// Importing the "costsModel" from the "../models/costsmodel" file
const costsModel = require("../models/costsmodel"); 

// Importing the "usersModel" from the "../models/usersmodel" file
const usersModel = require("../models/usersmodel"); 

// Importing the "addCostValidations" from the "../validations/addcostvalidations" file
const addCostValidations = require("../validations/addcostvalidations"); 

// Importing the "generateRandomId" function from the "../utils" file
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

    /* Checking if the user exists in the database (check for the existence of the id that matches the
       user_id provided in the request body).
       This will query the users collection using the id field and search for a document where the id
       matches the user_id provided in the request body.
    */
    const isUserExist = await usersModel.exists({ id: user_id }); 

    // If the user does not exist create new error object and set the status code to 400 (bad request)
    if (!isUserExist) { 
      const error = new Error("User does not exist"); 
      error.status = 400; 
      throw error; 
    }

    // Generating a random ID using the "generateRandomId" function
    let id = generateRandomId();

    /* Checking if the generated ID already exists in the "costs" collection by using the "exists" method of the
       "costsModel" Mongoose model.
       This helps ensure the uniqueness of the generated ID.
    */
    let isIdExists = await costsModel.exists({ id });

    /*
      If the generated ID already exists, a loop is entered to regenerate a new random ID and check its existence in the collection.
      This loop continues until a unique ID is generated, ensuring that there are no duplicate IDs in the "costs" collection.
    */
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

// Exporting the addCostRouter as a module
module.exports = addCostRouter; 
