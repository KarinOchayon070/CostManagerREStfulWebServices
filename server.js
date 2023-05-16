/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/ 

const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./src/db/db');
const addCost = require('./src/routes/addcost');
const about = require('./src/routes/about');
const report = require('./src/routes/report');
const addUser = require('./src/routes/adduser');

// Creating an instance of the Express application.
const app = express();

// Setting the server port.
const port = 6003;

// Applying CORS middleware for cross-origin requests.
app.use(cors());
// Parsing incoming requests with JSON payloads.
app.use(express.json());
// Registering the addCost router for the "/addcost" path.
app.use("/addcost", addCost);
// Registering the about router for the "/about" path.
app.use("/about", about);
// Registering the report router for the "/report" path.
app.use("/report", report);
app.use("/adduser", addUser);

// Error handling middleware: Sends an error response with the error message and status code.
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// Starting the server and listening on the specified port and logging a message upon successful start.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
