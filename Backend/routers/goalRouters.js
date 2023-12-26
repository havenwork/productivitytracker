const express = require("express");
const { createGoal, goals } = require("../controller/goalController");

const goalRoute = express.Router();

goalRoute.post("/create-goal", createGoal);
goalRoute.get("/goals", goals);

module.exports = {
  goalRoute,
};
