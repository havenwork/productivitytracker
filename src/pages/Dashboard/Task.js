import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ComponentLoader from "../../components/ComponentLoader";
import { FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { message } from "antd";

function Task() {
  const { userID } = useSelector((state) => state.productivityTracker);
  const navigateTO = useNavigate();
  const [Loader] = useState(false);
  const [allTasks] = useState([]);

  useEffect(() => {}, []);
  return (
    <div
      className="w-full mx-auto pb-5 overflow-hidden overflow-y-auto text-white h-full"
      style={{ background: "rgb(0, 0, 0, 0.1)", backdropFilter: "blur(50px)" }}
    >
      <h1
        className="h-[80px] border-b p-2 text-2xl flex justify-between items-center font-medium"
        style={{ borderColor: "rgb(255, 255, 255, 0.4)" }}
      >
        Your Tasks
        <FaPlusCircle
          className="text-2xl cursor-pointer xsm:hidden"
          title="create Task"
          onClick={() => navigateTO("/dashboard/goal/create-task")}
          style={{ color: "#3bbc6c" }}
        />
        <button
          className="hidden xsm:block text-sm w-[120px] p-2 rounded-md sm:w-[170px] sticky top-0"
          style={{ background: "#3bbc6c" }}
          onClick={() => navigateTO("/dashboard/goal/create-goal")}
        >
          Create
        </button>
      </h1>
      <div
        className={`min-h-[calc(100%-90px)] ${
          allTasks.length === 0
            ? "flex items-center justify-center"
            : "grid gap-5 grid-cols-1 p-2 content-center xsm:grid-cols-[420px] sm:grid-cols-2 justify-center items-center"
        }`}
      >
        {Loader ? (
          <ComponentLoader />
        ) : (
          <>
            {
              <>
                {allTasks.length === 0 ? (
                  <p className="m-auto font-bold text-4xl text-center flex flex-col gap-x-5">
                    You do not have any tasks !{" "}
                    <span className="text-xl text-gray-400">
                      Want to create tasks ?
                    </span>
                  </p>
                ) : (
                  <></>
                )}
              </>
            }
          </>
        )}
      </div>
    </div>
  );
}

export default Task;
