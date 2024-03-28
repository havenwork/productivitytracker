import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import * as Yup from "yup";
import Loader from "../../components/Loader";
import background_png from "../../img/background.png";
import axios from "axios";

function CreateTask({ goalID, cbFun, cbLoadFun }) {
  const { userID } = useSelector((state) => state.productivityTracker);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [goalOptions, setGoalgoalOptions] = useState([]);

  const [taskDetails, setTaskDetails] = useState({
    user: userID,
    goal: goalID,
    title: "",
    status: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleInputOnChange = (e) => {
    setError({});
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };

  const handleClearField = () => {
    setTaskDetails({
      user: userID,
      goal: "",
      title: "",
      status: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  };

  const taskDetailsSchema = Yup.object({
    title: Yup.string()
      .min(5, "Title must be 5 character long")
      .required("Title required"),
    status: Yup.string().required("Status required"),
    startDate: Yup.string().required("Start date required"),
    endDate: Yup.string().required("End date required"),
    description: Yup.string().required("Description required"),
  });

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await taskDetailsSchema.validate(taskDetails, {
        abortEarly: false,
      });
      setLoading(true);
      axios
        .post("http://localhost:6766/task/create-task", taskDetails)
        .then((response) => {
          if (response.data.success) {
            message.success(`${response.data.msg}`);
            handleClearField();
            setLoading(false);
            cbFun(); // for  closing the credate popup
            cbLoadFun(); // for loading latest goal details
          } else {
            message.error("Something went wrong! Try again");
            handleClearField();
            setLoading(false);
          }
        });
    } catch (err) {
      let newError = {};
      err.inner.forEach((item) => {
        newError[`${item.path}Error`] = true;
        newError[`${item.path}Msg`] = item.message;
      });
      setError(newError);
    }
  };

  useEffect(() => {
    if (!goalID) {
      axios
        .get(`http://localhost:6766/goal/goals/${userID}`)
        .then((response) => {
          setGoalgoalOptions(response.data.goals);
        });
    } else {
      setTaskDetails({ ...taskDetails, goal: goalID });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID, goalID]);
  return (
    <div className="w-full h-full">
      <form
        className="mx-auto  px-1 py-2  w-[95%] xsm:w-[400px] xsm:py-2 sm:w-[475px] mt-1 mb-3 rounded-lg lg:w-10/12 2xl:w-[550px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${background_png})` }}
      >
        <div className="w-full my-2 h-[90px] xsm:w-11/12 xsm:mx-auto">
          <label
            htmlFor="title"
            className="block w-full pl-2 font-medium text-white"
          >
            Title*
          </label>
          <div className="h-[60px]">
            <input
              type="text"
              id="title"
              name="title"
              className="px-2 py-1 w-full font-semibold border border-black rounded-md focus:outline-none"
              placeholder="Enter task title"
              onChange={handleInputOnChange}
              value={taskDetails.title}
            />
            {error.titleError && (
              <p className="block pl-2 text-red-600 font-semibold italic text-sm">
                {error.titleMsg}
              </p>
            )}
          </div>
        </div>

        {!goalID && (
          <div className="w-full my-2 h-[90px] xsm:w-11/12 xsm:mx-auto">
            <label
              htmlFor="goal"
              className="block w-full pl-2 font-medium text-white"
            >
              Goal*
            </label>
            <div className="h-[60px]">
              <select
                name="goal"
                id="goal"
                onChange={handleInputOnChange}
                className="px-2 py-1 w-full font-semibold border border-black rounded-md focus:outline-none cursor-pointer"
              >
                <option value="">Select your goal</option>
                {goalOptions?.map((options, index) => {
                  return (
                    <option key={index} value={options._id}>
                      {options.title}
                    </option>
                  );
                })}
              </select>
              {error.statusError && (
                <p className="block pl-2 text-red-600 font-semibold italic text-sm">
                  {error.statusMsg}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="w-full my-2 h-[90px] xsm:w-11/12 xsm:mx-auto">
          <label
            htmlFor="status"
            className="block w-full pl-2 font-medium text-white"
          >
            Status*
          </label>
          <div className="h-[60px]">
            <select
              name="status"
              id="status"
              onChange={handleInputOnChange}
              className="px-2 py-1 w-full font-semibold border border-black rounded-md focus:outline-none cursor-pointer"
            >
              <option value={""}>Select task status</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
            {error.statusError && (
              <p className="block pl-2 text-red-600 font-semibold italic text-sm">
                {error.statusMsg}
              </p>
            )}
          </div>
        </div>

        <div className="w-full my-2 h-[90px] xsm:w-11/12 xsm:mx-auto">
          <label
            htmlFor="startDate"
            className="block w-full pl-2 font-medium text-white"
          >
            Start date*
          </label>
          <div className="h-[60px]">
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="px-2 py-1 w-full font-semibold border border-black rounded-md focus:outline-none"
              onChange={handleInputOnChange}
              value={taskDetails.startDate}
            />
            {error.startDateError && (
              <p className="block pl-2 text-red-600 font-semibold italic text-sm">
                {error.startDateMsg}
              </p>
            )}
          </div>
        </div>

        <div className="w-full my-2 h-[90px] xsm:w-11/12 xsm:mx-auto">
          <label
            htmlFor="endDate"
            className="block w-full pl-2 font-medium text-white"
          >
            End date*
          </label>
          <div className="h-[60px]">
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="px-2 py-1 w-full font-semibold border border-black rounded-md focus:outline-none"
              onChange={handleInputOnChange}
              value={taskDetails.endDate}
            />
            {error.endDateError && (
              <p className="block pl-2 text-red-600 font-semibold italic text-sm">
                {error.endDateMsg}
              </p>
            )}
          </div>
        </div>

        <div className="w-full my-2 min-h-[150px] xsm:w-11/12 xsm:mx-auto">
          <label
            htmlFor="endDate"
            className="block w-full pl-2 font-medium text-white"
          >
            Description*
          </label>
          <div className="h-[240px]">
            <textarea
              placeholder="Short description of your task"
              name="description"
              className="h-[220px] h resize-none block mx-auto px-2 py-1 w-full font-semibold border border-black rounded-md focus:outline-none"
              onChange={handleInputOnChange}
              value={taskDetails.description}
            ></textarea>
            {error.descriptionError && (
              <p className="block pl-2 text-red-600 font-semibold italic text-sm">
                {error.descriptionMsg}
              </p>
            )}
          </div>
        </div>

        <button
          className="block border-1 bg-green-400 w-7/12 h-[40px] mx-auto p-1 rounded-3xl font-semibold cursor-pointer hover:bg-green-500 my-5 relative"
          onClick={handleCreateTask}
        >
          {isLoading ? <Loader /> : "Create task"}
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
