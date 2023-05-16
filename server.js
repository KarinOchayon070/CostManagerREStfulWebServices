const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./src/db/db');
const addCost = require('./src/routes/addcost');
const about = require('./src/routes/about');
const report = require('./src/routes/report');
const addUser = require('./src/routes/adduser');


const app = express();
const port = 6003;

app.use(cors());
app.use(express.json());

app.use("/addcost", addCost);
app.use("/about", about);
app.use("/report", report);
app.use("/adduser", addUser);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
