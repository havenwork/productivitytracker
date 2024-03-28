const JWT = require("jsonwebtoken");
require("dotenv").config({ path: "./config.env" });

const verifyJWT = async (request, response)=>{
const {Token, userID} = request.body;
if (!Token) {
    return response.status(401).json({
      success: false,
      message: "Please log in.",
    });
  }

  try {
    const payload = JWT.verify(Token, process.env.JWT_SECRET);
    response.send({
        success: true,
        payload : payload,
        userID: userID
    });

  } catch (error) {
    response.send({
      success: false,
      message: "Invalid or expired token. Please log in again.",
    });
  }
}

module.exports = {verifyJWT}