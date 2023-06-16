/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/ 

// Importing the Express library to create an Express application
const express = require('express');

// Importing the "cors" library to enable Cross-Origin Resource Sharing
//const cors = require('cors');

// Importing the "dotenv" library to load environment variables from a .env file
require('dotenv').config();

// Importing the "./src/models/db" file to establish a connection to the database
require('./src/models/db');

// Importing the "./src/routes/addcost" file to handle routes related to adding new cost entries
const addCost = require('./src/routes/addcost');

// Importing the "./src/routes/about" file to handle routes related to the "about" functionality
const about = require('./src/routes/about');

// Importing the "./src/routes/report" file to handle routes related to generating reports
const report = require('./src/routes/report');

// Creating an instance of the Express application
const app = express();

// Setting the server port
const port = 6003;

// Applying CORS middleware for cross-origin requests
//app.use(cors());

// Parsing incoming requests with JSON payloads
app.use(express.json());

// Registering the addCost router for the "/addcost" path
app.use("/addcost", addCost);

// Registering the about router for the "/about" path
app.use("/about", about);

// Registering the report router for the "/report" path
app.use("/report", report);

// Error handling middleware: Sends an error response with the error message and status code
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// Starting the server and listening on the specified port and logging a message upon successful start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
