const express = require("express");
const { tasks, createTask, updateTask, deleteTask } = require("../controller/taskController");

const taskRouter = express.Router();

taskRouter.get('/tasks', tasks);
taskRouter.post('/create-task', createTask);
taskRouter.put('/update-task', updateTask);
taskRouter.delete('/delete-task', deleteTask);

module.exports = {
    taskRouter
}