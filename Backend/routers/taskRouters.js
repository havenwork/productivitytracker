const express = require("express");
const { tasks, createTask, updateTask, deleteTask } = require("../controller/taskController");

const taskRoute = express.Router();

taskRoute.get('/tasks', tasks);
taskRoute.post('/create-task', createTask);
taskRoute.put('/update-task', updateTask);
taskRoute.delete('/delete-task', deleteTask);

module.exports = {
    taskRoute
}