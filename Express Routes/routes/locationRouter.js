const express = require("express");
const locationRouter = express.Router();

const locations = ["Tacoma", "Marysville", "Seattle", "Spokane", "Bellingham"];

locationRouter
  .route("/")
  .get((req, res) => {
    res.send(locations);
  })
  .post((req, res) => {
    const newLocation = req.body.location;
    locations.push(newLocation);
    res.send(locations);
  });

module.exports = locationRouter;
