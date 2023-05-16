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
  