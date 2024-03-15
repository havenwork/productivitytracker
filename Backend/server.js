const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const databaseConnect = require("./config/db_config");
const { userRoute } = require("./routers/authRouters");
const { goalRoute } = require("./routers/goalRouters");
const { taskRouter } = require("./routers/taskRouters");

require("dotenv").config({ path: "./config.env" });

const app = express();
databaseConnect();

app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    origin: "*", //giving access to all domain users
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", userRoute);
app.use("/goal", goalRoute);
app.use("/task", taskRouter);

app.use("/home", (req, res) => {
  res.status(200).json({
    data: "user management like application",
  });
});

// const goalModel = require("./models/goalModels");
// const userModel = require("./models/userModels");
// const getGoal = async () => {
//   const getUser = await userModel.find({});
//   const result = await goalModel.find({});
//   console.log(`RESULT : ${result}`);
//   console.log(`USER : ${getUser}`);
// };
// getGoal();

const PORT = process.env.PORT || 6766;

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
