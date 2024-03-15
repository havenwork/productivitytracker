const goalModel = require("../models/goalModels");

const createGoal = async (req, res) => {
    try {
        const body = req.body;
        body.startDate = new Date(body.startDate);
        body.endDate = new Date(body.endDate);

        const goal = goalModel(req.body);

        await goal.save();
        res.status(200).json({
            success: true,
            msg: "Goal Created Successfully",
            goal : goal
        });
    } catch (error) {
        res.status(400).json({ msg: false });
    }

};

const goals = async (req, res) => {
    try {
        const goal = await goalModel.find({ user: req.body.userId });
        res.status(200).json({
            msg: "success",
            data: goal,
        });
    } catch (error) {
        res.status(400).json({ msg: false });
    }
};

const updateGoal = async (req, res) => {
    try {
        const result = await goalModel.updateOne({ _id: req.body.goalId }, req.body);
        if (result.modifiedCount === 1) {
            res.status(200).json({
                msg: "success",
                data: "Goal Updated Successfully",
            });
        } else {
            res.status(400).json({
                msg: "error",
                data: "Goal Not Found",
            });
        }
    } catch (error) {
        res.status(400).json({ msg: false });
    }
}

const deleteGoal = async (req, res) => {
    try {
        const result = await goalModel.deleteOne({ _id: req.body.goalId });
        if (result.deletedCount === 1) {
            res.status(200).json({
                msg: "success",
                data: "Goal Deleted Successfully",
            });
        } else {
            res.status(400).json({
                msg: "error",
                data: "Goal Not Found",
            });
        }
    } catch (error) {
        res.status(400).json({ msg: false });
    }
}

module.exports = {
    createGoal,
    goals,
    updateGoal,
    deleteGoal,
};
