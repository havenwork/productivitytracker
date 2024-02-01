const categoryModel = require("../models/categoryModels");

const categories = async (req, res) => {
    try {
        const category = await categoryModel.find({ goal: req.body.goalId });

        if (!category) {
            return res.status(404).send({ msg: "Category not found" });
        }

        res.status(200).send({
            msg: "Success",
            data: category,
        });
    } catch (err) {
        res.status(400).json({ msg: false });
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await categoryModel(req.body);
        await category.save();

        res.status(200).json({
            msg: "success",
            data: category,
        });
    } catch (error) {
        res.status(400).json({ msg: false });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const result = await categoryModel.deleteOne({ _id: req.body.categoryId });
        if (result.deletedCount === 1) {
            res.status(200).json({
                msg: "success",
                data: "Category Deleted Successfully",
            });
        } else {
            res.status(400).json({
                msg: "error",
                data: "Category Not Found",
            });
        }
    } catch (error) {
        res.status(400).json({ msg: false });
    }
}

const updateCategory = async (req, res) => {
    try {
        const result = await categoryModel.updateOne({ _id: req.body.categoryId }, req.body);
        if (result.modifiedCount === 1) {
            res.status(200).json({
                msg: "success",
                data: "Category Updated Successfully",
            });
        } else {
            res.status(400).json({
                msg: "error",
                data: "Category Not Found",
            });
        }
    } catch (error) {
        res.status(400).json({ msg: false });
    }
}


module.exports = {
    categories,
    createCategory,
    deleteCategory,
    updateCategory
}