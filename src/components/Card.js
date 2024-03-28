import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { message } from "antd";
import { useCallback } from "react";
import calculateDays from "../helpers/CalculateDays";

function Card({ data, cardType, cbLoadTask }) {

  const handleDeleteGoal = (goalID) => {
    axios
      .delete(`http://localhost:6766/goal/delete-goal/${goalID}`)
      .then((response) => {
        if (response.data.success) {
          message.success("Goal deleted successfully");
          cbLoadTask();
        } else {
          message.error("Goal not found");
          cbLoadTask();
        }
      })
      .catch((err) => {
        message.error(`Something went wrong! ${err.message}`);
        cbLoadTask();
      });
  };

  const handleDeleteTask = useCallback(
    (taskID) => {
      axios
        .delete(`http://localhost:6766/task/delete-task/${taskID}`)
        .then((response) => {
          if (response.data.success) {
            message.success("Task deleted successfully");
            cbLoadTask();
          } else {
            message.error("Task not found");
            cbLoadTask();
          }
        })
        .catch((err) => {
          message.error(`Something went wrong! ${err.message}`);
          cbLoadTask();
        });
    },
    [cbLoadTask]
  );

  const handleDeleteFeature = (e, id) => {
    e.preventDefault();
    if (cardType === "task") {
      handleDeleteTask(id);
    } else {
      handleDeleteGoal(id);
    }
  };



  return (
    <div
      className="border w-[95%] h-[320px] mt-2 rounded-md xsm:w-[420px] relative"
      style={{
        borderColor: "rgb(255, 255, 255, 0.2",
        backgroundColor: "rgb(255, 255, 255, 0.05)",
      }}
    >
      <h1 className="block no-underline font-sm p-2 font-semibold">
        {data?.title.slice(0, 20)}...
      </h1>
      <MdDelete
        className="absolute top-2 right-2 text-2xl cursor-pointer hover:text-red-600"
        title="Delete goal"
        onClick={(e) => handleDeleteFeature(e, data?._id)}
      />
      <p className="border-t border-b p-2 my-2 flex items-center justify-between">
        <span
          className={`text-right font-semibold ${
            data?.status === "Todo" && "text-blue-500"
          } ${data?.status === "In Progress" && "text-orange-500"} ${
            data?.status === "Complete" && "text-green-500"
          }`}
        >
          {data?.status}
        </span>
        <span
          className={`text-right font-semibold ${
            data?.priority === "High" && "text-red-500"
          } ${data?.priority === "Medium" && "text-red-400"} ${
            data?.priority === "Low" && "text-red-300"
          }`}
        >
          {data?.priority}
        </span>
      </p>

      <div className="my-2 h-[60px] px-1 flex items-center justify-between">
        <p
          className="flex flex-col items-center justify-center w-[120px] h-full rounded-md gap-1"
          style={{ background: "rgb(255,255,255,0.05" }}
        >
          <span className="text-lg font-light text-gray-400">
            Starting Date
          </span>
          <span className="text-sm font-medium">
            {data?.startDate.split("T")[0]}
          </span>
        </p>

        <p
          className="flex flex-col items-center justify-center w-[120px] h-full rounded-md gap-1"
          style={{ background: "rgb(255,255,255,0.05" }}
        >
          <span className="text-lg font-light text-gray-400">Due Date</span>
          <span className="text-sm font-medium">
            {data?.endDate.split("T")[0]}
          </span>
        </p>
      </div>

      <p className="my-10 px-2 flex items-center justify-center gap-2">
        <SlCalender className="text-sm" />
        <span className="mr-2 font-semibold text-sm">{calculateDays(data?.endDate.split("T")[0])}</span>
      </p>

      <Link
        to={`/dashboard/user/${cardType}/${data?._id}`}
        state={data}
        className="block text-center absolute w-[100px] bottom-0 left-0 border text-sm font-semibold rounded-b-md p-2 hover:text-orange-400"
      >
        View Details
      </Link>
      <Link
        to={`/dashboard/user/${cardType}/update/${data?._id}`}
        state={data}
        className="block text-center absolute w-[90px] bottom-0 right-0 border text-sm font-semibold rounded-b-md p-2 hover:text-green-400"
      >
        Update
      </Link>
    </div>
  );
}

export default Card;
