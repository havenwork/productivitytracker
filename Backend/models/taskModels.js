const mongoose = require("mongoose");

const taskModel = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        goal: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "goal",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        status: {
            required: true,
            type: String,
            enum: ["In Progress", "Complete", "Todo"],
        },
        description: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("task", taskModel);