
const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// signup controller
const signup = async (req, res) => {
  try {
    const newUser = userModel(req.body);
    const result = await newUser.save();

    res.status(200).json({
       success: true,
      message: "Sign Up Successfull",
    });
  } catch (error) {
    res.status(400).json({
       success: false,
      message: error.message,
    });
  }
};

// login controller




const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const getuserData = await userModel
      .findOne({ username })
      .select("+password");
    if (!getuserData && !getuserData.username) {
      res.status(404).send({ msg: "No Account Found Associated with this username" });
    }
      const result = await bcrypt.compare(password, getuserData.password);
      if (!result) {res.status(404).send("user password wrong")}
        // Generate a JWT token
        const token = jwt.sign(
          { username: getuserData.username, /* any other data you want to include */ },
          'your_secret_key', // Replace 'your_secret_key' with a secret key for signing the token
          { expiresIn: '24h' } // Token expiration time
        );
         
        const cookieOption = {
          maxAge: 24 * 60 * 60 * 1000, // 24hr
          httpOnly: true,
          path: "/",
        };

        res.cookie("token", token, cookieOption);
        res.status(200).json({
          success: true,
          data: getuserData,
        });
       
      }
     
   catch (e) {
    res.status(400).send({
      message: e.message,
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








// exports.resetPassword=(req,res,next)={

// }
  
module.exports = {
  signup,
  login,
  getUser,
  
};
