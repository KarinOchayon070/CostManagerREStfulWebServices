const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@costmanager.tqoiuuv.mongodb.net/costManager`).then(() => {
  console.log("connected to db");
})
.catch((err) => {
  console.log("error connecting to db", err);
});


