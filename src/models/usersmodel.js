/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

// Importing the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Defining a Mongoose schema named "usersSchema" to specify the structure and data types of documents in the "users" collection in the MongoDB
const usersSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    first_name: String,
    last_name: String,
    birthday: String,
  },
  { versionKey: false }
);

// Creating a Mongoose model named "usersModel" for the "users" collection in the MongoDB database using the defined "usersSchema".
const usersModel = mongoose.model("users", usersSchema);

// Exporting the usersModel as a module
module.exports = usersModel;
  