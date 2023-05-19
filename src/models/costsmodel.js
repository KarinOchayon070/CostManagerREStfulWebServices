/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

const mongoose = require("mongoose");
const {categories} = require("../constants");

// This code is defining a Mongoose schema and model for managing costs
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

const costsModel = mongoose.model("costs", costsSchema);

module.exports = costsModel;
