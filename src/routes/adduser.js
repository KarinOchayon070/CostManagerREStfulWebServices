const express = require("express");
const usersModel = require("../db/usersmodel")

const addUser = express.Router();

addUser.post("/", async (req, res, next) => {
  try {
    const newUser = await new usersModel(req.body).save();

    
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});


module.exports = addUser;

  


