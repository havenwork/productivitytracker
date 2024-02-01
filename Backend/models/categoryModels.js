/// Create Category Model
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        goal: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "goal",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const categoryModel = mongoose.model("category", categorySchema);
module.exports = categoryModel;

