const express = require("express");
const costsModel = require("../db/costsmodel")
const {categories} = require("../constants");
const reportValidations = require("../validations/reportvalidations");

const reportRouter = express.Router();

reportRouter.get("/", async (req, res, next) => {
  try {
    const validations = reportValidations.validate(req.query);

    if(validations.error){
      validations.error.status = 400;
      throw validations.error;
    }

    const costs = await costsModel.find(req.query);


    if(!costs.length){
      validations.error.status = 400;
      throw new Error("No costs found for this specific query");
    }

    const result = {};
    categories.forEach(category => {
      result[category] = [];
    });

    costs.forEach(cost => {
      const costItem = {
        day: cost.day,
        sum: cost.sum,
        description: cost.description,
      }

      result[cost.category].push(costItem);
    });
    
    res.json(result);
  } catch (error) {
    next(error);
  }
});


module.exports = reportRouter;


// demonstrates the implementation of the computed design pattern in your Express.js and MongoDB project.

// In the code, you are retrieving data from the MongoDB database using costsModel.find() based on the req.query. Then, you are performing a computation/transformation on the retrieved costs data.

// Here's a breakdown of how the computed design pattern is applied:

// You check if there are any costs retrieved from the database (if (!costs.length)). If there are no costs found, you throw an error indicating that no costs were found for the specific query.

// You initialize an empty result object to store the computed values.

// You iterate over each cost in the costs array. For each cost, you create a costItem object containing specific properties (day, sum, description).

// Using the cost.category as the key, you push the costItem into the appropriate category array within the result object. This step helps you group the costs by their category.

// By grouping the costs by category and storing them in the result object, you are computing a transformed representation of the retrieved data. This can be useful for presenting the data in a specific format or for performing further calculations or analysis.

// Overall, your code demonstrates the computed design pattern by performing computations and transforming the retrieved costs data into a structured format (result object) that can be utilized for further processing or responding to client requests.
  


