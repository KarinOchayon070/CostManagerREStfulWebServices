const express = require("express");
const costsModel = require("../db/costsmodel")
const usersModel = require("../db/usersmodel")
const addCostValidations = require("../validations/addcostvalidations")

const addCostRouter = express.Router();

addCostRouter.post("/", async (req, res, next) => {
  const {user_id} = req.body;

  try {
    const validations = addCostValidations.validate(req.body);

    if(validations.error){
      validations.error.status = 400;
      throw validations.error;
    }

    const isUserExist = await usersModel.exists({user_id});

    if(!isUserExist){
      const error = new Error("User does not exist");
      error.status = 400;
      throw error;
    }

    const cost = await new costsModel(req.body).save();

    
    res.json(cost);
  } catch (error) {
    next(error);
  }
});


module.exports = addCostRouter;

  


