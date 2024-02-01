const express = require("express");
const { categories, createCategory, deleteCategory, updateCategory } = require("../controller/categoryController");

const categoryRoute = express.Router();

categoryRoute.get("/categories", categories);
categoryRoute.post("/create-category", createCategory);
categoryRoute.delete("/delete-category", deleteCategory);
categoryRoute.put("/update-category", updateCategory);

module.exports = {
    categoryRoute,
};
