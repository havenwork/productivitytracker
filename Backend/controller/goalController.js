const goalModel = require("../models/goalModels");

const createGoal = async (req, res) => {
    try {
        const body = req.body;
        body.startDate = new Date(body.startDate);
        body.endDate = new Date(body.endDate);

        const goal = goalModel(req.body);

        await goal.save();
        res.status(200).json({
            msg: "success",
            data: "Goal Created Successfully",
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

module.exports = {
    createGoal,
    goals,
};
