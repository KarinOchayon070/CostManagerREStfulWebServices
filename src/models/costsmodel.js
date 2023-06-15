/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

// Importing the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Importing the "categories" object from the "../constants" file
const {categories} = require("../constants");

// This code is defining a Mongoose schema 
const costsSchema = new mongoose.Schema(
  {
    id: Number,
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    sum: Number,
    category: {
      type: String,
      /* Note: The enum property restricts the possible values of the category field
         to the ones specified in the imported categories constant.*/
      enum: categories,
    },
  },
  { versionKey: false }
);

// Creating a Mongoose model named "costsModel" for the "costs" collection in the MongoDB database using the defined "costsSchema"
const costsModel = mongoose.model("costs", costsSchema);

// Exporting the costsModel as a module
module.exports = costsModel;
