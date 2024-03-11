const taskModel = require("../models/taskModels");
const createTask = async (req, res) => {
    try {
        const body = req.body;
        body.startDate = new Date(body.startDate);
        body.endDate = new Date(body.endDate);
        const task = taskModel(req.body);
        await task.save();
        res.status(200).json({
            msg: "success",
            data: "Task Created Successfully",
            taskID: task._id
        });
    } catch (error) {
        if (error.errors.description !== undefined) {
            res.status(400).json({ msg: false, error: error.errors.description.message });
        }
        res.status(400).json({ msg: false });
    }
}

const tasks = async (req, res) => {
    try {
        const task = await taskModel.find({ task: req.body.taskId });
        if (task.length === 0) {
            res.status(400).json({
                msg: "error",
                data: "Task Not Found",
            });
        } else {
            res.status(200).json({
                msg: "success",
                data: task,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: false });
    }
}

const updateTask = async (req, res) => {
    try {
        const result = await taskModel.updateOne({ _id: req.body.taskId }, req.body);
        if (result.modifiedCount === 1) {
            res.status(200).json({
                msg: "success",
                data: "Task Updated Successfully",
            });
        } else {
            res.status(400).json({
                msg: "error",
                data: "Task Not Found",
            });
        }
    } catch (error) {
        res.status(400).json({ msg: false });
    }
}

const deleteTask = async (req, res) => {
    try {
        const result = await taskModel.deleteOne({ _id: req.body.taskId });
        if (result.deletedCount === 1) {
            res.status(200).json({
                msg: "success",
                data: "Task Deleted Successfully",
            });
        } else {
            res.status(400).json({
                msg: "error",
                data: "Task Not Found",
            });
        }
    } catch (error) {
        res.status(400).json({ msg: false });
    }
}

module.exports = {
    createTask,
    tasks,
    updateTask,
    deleteTask,
}
