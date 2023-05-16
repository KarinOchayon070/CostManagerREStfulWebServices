const mongoose = require("mongoose");
const {categories} = require("../constants");

const costsSchema = new mongoose.Schema(
  {
    user_id: String,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    sum: Number,
    category: {
      type: String,
      enum: categories,
    },
  },
  { versionKey: false }
);

const costsModel = mongoose.model("costs", costsSchema);

module.exports = costsModel;
