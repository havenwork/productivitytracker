const taskModel = require("../models/taskModels");

const createTask = async (req, res) => {
  try {
    const body = req.body;
    const mongooseResponse = await taskModel.create(body);
    if (mongooseResponse) {
      res.status(200).json({
        success: true,
        msg: "Task Created Successfully",
      });
    } else {
      res.status(200).json({
        success: false,
        msg: "Try Again",
      });
    }
  } catch (error) {
    res.send({ success: false });
  }
};

const tasks = async (req, res) => {
  const { goalID } = req.params;
  try {
    const task = await taskModel.find({ goal: goalID });
    if (task.length === 0) {
      res.send({
        success: false,
        data: "Task Not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        allTasks: task,
      });
    }
  } catch (error) {
    res.send({ success: false });
  }
};

const allTasks = async (req, res) => {
  const { userID } = req.params;
  try {
    const task = await taskModel.find({ user: userID });
    if (task.length === 0) {
      res.send({
        success: false,
        data: "Task Not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        allTasks: task,
      });
    }
  } catch (error) {
    res.send({ success: false });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId, title, description, status, startDate, endDate } = req.body;
    const result = await taskModel.updateOne(
      { _id: taskId },
      {
        title: title,
        status: status,
        startDate: startDate,
        endDate: endDate,
        description: description,
      }
    );
    if (result.acknowledged) {
      res.send({
        success: true,
        msg: "Task Updated Successfully",
      });
    } else {
      res.send({
        success: false,
        msg: "Task not found",
      });
    }
  } catch (error) {
    res.status(400).json({ msg: false });
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await taskModel.deleteOne({ _id: req.params.taskID });
    if (result.acknowledged) {
      res.status(200).json({
        success: true,
        resMsg: "Task Deleted Successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        resMsg: "Task not found",
      });
    }
  } catch (error) {
    res.status(400).json({ msg: false });
  }
};

module.exports = {
  createTask,
  tasks,
  updateTask,
  deleteTask,
  allTasks,
};
