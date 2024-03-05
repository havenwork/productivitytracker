const express = require("express");
const { signup, login, getUser } = require("../controller/authController");
const authenticateUser = require("../middleware/authenticateUser");
const { loginValidator } = require("../middleware/loginValidator");
const { signupValidator } = require("../middleware/signupValidator");


const { sendResetPasswordEmail} = require("../utils/email");
// const {forgotPassword} =require("../controller/authController")
// const {resetPassword} =require("../controller/authController")



const userRoute = express.Router();

userRoute.post("/signup", signupValidator, signup);

userRoute.post("/login", loginValidator, login);
userRoute.get("/", authenticateUser, getUser);



userRoute.post("/sendResetPasswordEmail",sendResetPasswordEmail);

// userRoute.post("/forgotPassword",forgotPassword);
// userRoute.post("resetPassword",resetPassword);





module.exports = {
  userRoute,
};

