import React, { useState } from "react";
import { message } from "antd";
import * as Yup from "yup";
import Loader from "../../components/Loader";
import axios from "axios";
function CreateGoal() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [goal, setGoal] = useState({
    user: "65e98df5ed6f57e84c45b81c", //! PR CREATE KRNE SE PHLE ISSKO (DEFAULT VALUE) HATTA DENA HAI
    title: "",
    priority: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const handleInputOnChange = (e) => {
    setError({});
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleClearField = () => {
    setGoal({
      user: "65e98df5ed6f57e84c45b81c", //! PR CREATE KRNE SE PHLE ISSKO (DEFAULT VALUE) HATTA DENA HAI
      title: "",
      priority: "Select goal priority",
      status: "Select goal status",
      startDate: "",
      endDate: "",
    });
  };

  const signInSchema = Yup.object({
    title: Yup.string().min(5, "Title must be 5 character long").required(""),
    priority: Yup.string().required("Priority required"),
    status: Yup.string().required("Status required"),
    startDate: Yup.string().required("Start date required"),
    endDate: Yup.string().required("End date required"),
  });

  const handleCreateGoal = async (e) => {
    e.preventDefault();
    try {
      await signInSchema.validate(goal, {
        abortEarly: false,
      });
      setLoading(true);
      axios
        .post("http://localhost:6766/goal/create-goal", goal)
        .then((response) => {
          if (response.data.success) {
            message.success(`${response.data.msg}`);
            handleClearField();
            setLoading(false);
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
  return (
    <form
      className="min-h-[550px] px-1 py-2  w-11/12 xsm:w-[400px] md:w-[550px] xsm:py-2  m-auto rounded-lg"
      style={{ background: "rgb(255, 255, 255, 0.1)" }}
    >
      {/* createGoal form primary heading */}
      <h1 className="text-center p-2 text-xl font-medium uppercase text-white">
        Create your goal and achieve it
      </h1>
      <hr className="mb-4"/>
      {/* createGoal__formItemRows */}
      <div className="w-full my-2 h-[90px] md:w-10/12 md:mx-auto">
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
            placeholder="Enter goal title"
            onChange={handleInputOnChange}
            value={goal.title}
          />
          {error.titleError && (
            <p className="block pl-2 text-red-600 font-semibold italic text-sm">
              {error.titleMsg}
            </p>
          )}
        </div>
      </div>

      <div className="w-full my-2 h-[90px]  md:w-10/12 md:mx-auto">
        <label
          htmlFor="priority"
          className="block w-full pl-2 font-medium text-white"
        >
          Priority*
        </label>
        <div className="h-[60px]">
          <select
            name="priority"
            id="priority"
            onChange={handleInputOnChange}
            className="px-2 py-1 w-full font-semibold border border-black rounded-md focus:outline-none cursor-pointer"
          >
            <option value={''}>Select goal priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {error.statusError && (
            <p className="block pl-2 text-red-600 font-semibold italic text-sm">
              {error.statusMsg}
            </p>
          )}
        </div>
      </div>

      <div className="w-full my-2 h-[90px]  md:w-10/12 md:mx-auto">
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
            <option  value={''}>Select goal status</option>
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

      <div className="w-full my-2 h-[90px]  md:w-10/12 md:mx-auto">
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
            value={goal.startDate}
          />
          {error.startDateError && (
            <p className="block pl-2 text-red-600 font-semibold italic text-sm">
              {error.startDateMsg}
            </p>
          )}
        </div>
      </div>

      <div className="w-full my-2 h-[90px]  md:w-10/12 md:mx-auto">
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
            value={goal.endDate}
          />
          {error.endDateError && (
            <p className="block pl-2 text-red-600 font-semibold italic text-sm">
              {error.endDateMsg}
            </p>
          )}
        </div>
      </div>

      <button
        className="block border-1 bg-green-400 w-7/12 h-[40px] mx-auto p-1 rounded-3xl font-semibold cursor-pointer hover:bg-green-500 my-5 relative"
        onClick={handleCreateGoal}
      >
        {isLoading ? <Loader /> : "Create goal"}
      </button>
    </form>
  );
}

export default CreateGoal;
