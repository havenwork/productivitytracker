const express = require("express");
const { signup, login, getUser } = require("../controller/authController");
const authenticateUser = require("../middleware/authenticateUser");
const { loginValidator } = require("../middleware/loginValidator");
const { signupValidator } = require("../middleware/signupValidator");
const multer = require('multer');
const path = require('path');

// Set up Multer storage
const storage = multer.diskStorage({
  destination: 'public/profile_img',
  filename: function (req, file, cb) {
    const fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
    req.image = fileName;
  }
});

const upload = multer({
  storage: storage, limits: {
    fileSize: 500 * 1024, // 500KB limit
  },
});


const { sendResetPasswordEmail } = require("../utils/email");
// const {forgotPassword} =require("../controller/authController")
// const {resetPassword} =require("../controller/authController")



const userRoute = express.Router();

userRoute.post("/signup", upload.single('image'), signupValidator, signup);

userRoute.post("/login", loginValidator, login);
userRoute.get("/:id", getUser);




userRoute.post("/sendResetPasswordEmail", sendResetPasswordEmail);

// userRoute.post("/forgotPassword",forgotPassword);
// userRoute.post("resetPassword",resetPassword);





module.exports = {
  userRoute,
};

