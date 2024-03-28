const express = require("express");
const { tasks, createTask, updateTask, deleteTask,allTasks } = require("../controller/taskController");

const taskRouter = express.Router();


taskRouter.get('/all-tasks/:userID', allTasks);
taskRouter.get('/tasks/:goalID', tasks);
taskRouter.post('/create-task', createTask);
taskRouter.put('/update-task', updateTask);
taskRouter.delete('/delete-task/:taskID', deleteTask);

module.exports = {
    taskRouter
}