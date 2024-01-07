const express = require("express");
const { createGoal, goals, deleteGoal, updateGoal } = require("../controller/goalController");

const goalRoute = express.Router();

goalRoute.get("/goals", goals);
goalRoute.post("/create-goal", createGoal);
goalRoute.delete("/delete-goal", deleteGoal);
goalRoute.put("/update-goal", updateGoal);

module.exports = {
  goalRoute,
};
