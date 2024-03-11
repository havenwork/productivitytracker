const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltround = 10;
// signup controller
const signup = async (req, res) => {
  try {
    const tempUser = req.body;
    const isUserExists = await userModel.findOne({ email: tempUser.email });
    const isUniqueUserName = await userModel.findOne({
      username: tempUser.username,
    });
    if (isUniqueUserName) {
      return res.status(200).json({
        success: false,
        errMsg: "User name not available",
      });
    }
    if (isUserExists) {
      return res.status(200).json({
        success: false,
        errMsg: "Email already registered",
      });
    }

    // hash user password
    tempUser.password = bcrypt.hashSync(tempUser.password, saltround);

    const mongooseResponse = await userModel.create(tempUser);
    if (mongooseResponse) {
      return res.status(200).json({
        success: true,
        errMsg: "User created successfully",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      errMsg: error.message,
    });
  }
};

// login controller

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUserRegistered = await userModel.findOne({
      $or: [{ email: { $eq: username } }, { username: username }],
    });
    console.log(!isUserRegistered)
    if (!isUserRegistered) {
      return res.json({
        success: false,
        errMsg: "No Account Found Associated with this username",
      });
    }

    // matching password
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserRegistered.password
    );
    if (!isPasswordMatch) {
      return res.json({
        success: false,
        errMsg: "Wrong password",
      });
    }

    // Generating JWT token
    const token = jwt.sign({}, "productivitytracker", { expiresIn: "24h" });

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000, // 24hr
      httpOnly: true,
      path: "/",
    };

    res.cookie("token", token, cookieOption);
    isUserRegistered.password = undefined; // assign the user password to undefined for security reasons
    return res.status(200).json({
      success: true,
        errMsg: "Logged in successfully",
        currentUser : isUserRegistered
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      errMsg: error.message,
    });
  }
};

// user details
const getUser = async (req, res) => {
  const username = req.user.username;
  console.log("Username:", username);

  try {
    const userData = await userModel.findOne({ username });

    if (!userData) {
      return res.status(404).send({ msg: "User not found" });
    }

    res.status(200).send({
      msg: "Success",
      data: userData,
    });
  } catch (err) {
    res.status(501).send({ msg: err.message });
  }
};


module.exports = {
  signup,
  login,
  getUser,
};
