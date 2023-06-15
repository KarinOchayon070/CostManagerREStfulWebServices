/* Developers details:
   - Karin Ochayon, 207797002
   - Dor Uzan, 205890510
*/

// To use the about endpoint  - https://costmanager.onrender.com/about

// Importing the Express library to create an Express application
const express = require("express");

// Create new instance of an Express router
const aboutRouter = express.Router();

// The router defines a route handler for GET requests to the root path ("/") of the "about" route
aboutRouter.get("/", async (req, res) => {
  /* Inside the route handler, an array developersDetails is defined, containing objects that
   represent developer details such as first name, last name, ID, and email.*/
  const developersDetails = [
    {
      firstname: "Karin",
      lastname: "Ochayon",
      id: "207797002",
      email: "karinoch070@gmail.com",
    },
    {
      firstname: "Dor",
      lastname: "Uzan",
      id: "205890510",
      email: "dor.uzan26@gmail.com",
    },
  ];
  // The route handler responds to the request by sending a JSON response containing the developersDetails array
  res.json(developersDetails);
});

// Exporting the aboutRouter as a module
module.exports = aboutRouter;
