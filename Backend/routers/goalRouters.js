const express = require("express");
const { createGoal, goals, deleteGoal, updateGoal } = require("../controller/goalController");

const goalRoute = express.Router();

goalRoute.get("/goals/:userID", goals);
goalRoute.post("/create-goal", createGoal);
goalRoute.delete("/delete-goal/:goalID", deleteGoal);
goalRoute.put("/update-goal", updateGoal);

module.exports = {
  goalRoute,
};
