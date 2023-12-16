const express = require("express");
const { signup, login, getUser } = require("../controller/authController");
const authenticateUser = require("../middleware/authenticateUser");
const { loginValidator } = require("../middleware/loginValidator");
const { signupValidator } = require("../middleware/signupValidator");
const { forgotPassword } = require("../middleware/forgotPassword"); 
const userRoute = express.Router();

userRoute.post("/signup", signupValidator, signup);

userRoute.post("/login", loginValidator, login);
userRoute.get("/", authenticateUser, getUser);
userRoute.post("/forgotPassword", forgotPassword); 

module.exports = {
  userRoute,
};
