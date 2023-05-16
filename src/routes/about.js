const express = require("express");

const aboutRouter = express.Router();

aboutRouter.get("/", async (req, res) => {
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

  res.json(developersDetails);
});

module.exports = aboutRouter;
