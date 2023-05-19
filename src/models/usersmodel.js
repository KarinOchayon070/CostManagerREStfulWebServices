/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

// This code defines a Mongoose schema and model for a collection called "users" in a MongoDB database

const mongoose = require("mongoose");

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

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;
  