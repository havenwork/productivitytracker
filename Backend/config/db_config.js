const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI="mongodb+srv://Siddhesh639:lwojtug9Q26miNO0@mongo.tmwb4ts.mongodb.net/auth-test?retryWrites=true&w=majority";

const databaseConnect = () => {
  mongoose
    .connect(MONGODB_URI)
    .then((conn) => {
      console.log(`Connected to ${conn.connection.host}`);
    })
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports = databaseConnect;

