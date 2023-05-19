/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

const mongoose = require("mongoose");

// This code is establishing a connection to a MongoDB database using the Mongoose library.
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@costmanager.tqoiuuv.mongodb.net/costManager`).then(() => {
  console.log("connected to db");
})
.catch((err) => {
  console.log("error connecting to db", err);
});


