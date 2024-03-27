import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import ComponentLoader from "../../components/ComponentLoader";
import { IoMdArrowBack } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import axios from "axios";
import Card from "../../components/Card";
import CreateTask from "./CreateTask";

function DetailsGoalView() {
  const { types } = useParams();
  const { state } = useLocation();
  const navigateTO = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [toggleCreateTask, settoggleCreateTask] = useState(false);

  const loadDetails = useCallback(() => {
    setLoading(true);
    axios
      .get(`http://localhost:6766/task/tasks/${state._id}`)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          setTasks(response.data.allTasks);
        } else {
          setTasks([]);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [state._id]);
  useEffect(loadDetails, [loadDetails]);

  const handleToggleCreateTask = (e) => {
    settoggleCreateTask(!toggleCreateTask);
  };
  return (
    <div className="w-full min-h-full relative ">
      <div className="w-full text-white xsm:w-[425px] sm:w-11/12  mx-auto">
        <button
          className="rounded-3xl border mt-4 flex items-center justify-center gap-1 h-[50px] w-[90px] hover:text-orange-400"
          onClick={() => navigateTO(-1)}
        >
          <IoMdArrowBack /> Back
        </button>
        <h1 className="p-2 text-center min-h-[40px] flex items-center justify-center border-b border-b-zinc-400">
          <span className="uppercase font-semibold mr-2 text-orange-400">
            {types} -{" "}
          </span>
          {state?.title}
        </h1>

        <div className="my-2 h-[60px] px-1 flex items-center justify-between">
          <p
            className="flex flex-col items-center justify-center w-[120px] h-full rounded-md gap-1"
            style={{ background: "rgb(255,255,255,0.05" }}
          >
            <span className="text-lg font-light text-gray-400">
              Starting Date
            </span>
            <span className="text-sm font-medium">
              {state?.startDate.split("T")[0]}
            </span>
          </p>

          <p
            className="flex flex-col items-center justify-center w-[120px] h-full rounded-md gap-1"
            style={{ background: "rgb(255,255,255,0.05" }}
          >
            <span className="text-lg font-light text-gray-400">Due Date</span>
            <span className="text-sm font-medium">
              {state?.endDate.split("T")[0]}
            </span>
          </p>
        </div>

        <p
          className="h-[80px] w-[120px] my-6 mx-auto flex flex-col items-center justify-center gap-1 rounded-md"
          style={{ border: "0.3px solid rgb(255,255,255,0.3" }}
        >
          <span className="font-light text-sm">Days Overdue</span>
          <span className="text-xl font-semibold">0</span>
        </p>

        <div className="my-2 h-[60px] px-1 flex items-center justify-between">
          <p
            className="flex flex-col items-center justify-center w-[120px] h-full rounded-md gap-1"
            style={{ background: "rgb(255,255,255,0.05" }}
          >
            <span className="text-lg font-light text-gray-400">Status</span>
            <span
              className={`text-sm font-medium ${
                state?.status === "Todo" && "text-blue-500"
              } ${state?.status === "In Progress" && "text-orange-500"} ${
                state?.status === "Complete" && "text-green-500"
              }`}
            >
              {state?.status}
            </span>
          </p>

          {state?.priority && (
            <p
              className="flex flex-col items-center justify-center w-[120px] h-full rounded-md gap-1"
              style={{ background: "rgb(255,255,255,0.05" }}
            >
              <span className="text-lg font-light text-gray-400">Priority</span>
              <span
                className={`text-sm font-medium ${
                  state?.priority === "High" && "text-red-500"
                } ${state?.priority === "Medium" && "text-red-400"} ${
                  state?.priority === "Low" && "text-red-300"
                }`}
              >
                {state?.priority}
              </span>
            </p>
          )}
        </div>

        {types === "task" ? (
          <div className="my-8 min-h-[130px]">
            <h3
              className="h-[70px] border-t border-b p-2 text-xl flex justify-between items-center font-medium mb-2"
              style={{ borderColor: "rgb(255, 255, 255, 0.4)" }}
            >
              Task Description
            </h3>
            <p className="text-lg font-light px-2">{state?.description}</p>
          </div>
        ) : (
          <div className="my-8 min-h-[330px]">
            <h3
              className="h-[70px] border-t border-b p-2 text-xl flex justify-between items-center font-medium mb-2"
              style={{ borderColor: "rgb(255, 255, 255, 0.4)" }}
            >
              Tasks : {tasks.length}
              <FaPlusCircle
                className="text-2xl cursor-pointer xsm:hidden"
                title="create Task"
                onClick={handleToggleCreateTask}
                style={{ color: "#3bbc6c" }}
              />
              <button
                type="button"
                className="hidden xsm:block text-sm w-[120px] p-2 rounded-md sm:w-[170px] sticky top-0"
                style={{ background: "#3bbc6c" }}
                onClick={handleToggleCreateTask}
              >
                Create
              </button>
            </h3>

            <div
              className={`relative min-h-[220px] ${
                tasks.length === 0
                  ? "flex items-center justify-center"
                  : "grid gap-5 grid-cols-1 p-2 content-center xsm:grid-cols-[420px] sm:grid-cols-2 justify-center items-center"
              }`}
            >
              {loading ? (
                <ComponentLoader />
              ) : (
                <>
                  {tasks.length === 0 ? (
                    <p className="text-2xl font-bold">No Tasks</p>
                  ) : (
                    <>
                      {tasks.map((task, index) => {
                        return (
                          <Card
                            data={task}
                            key={index}
                            cardType="task"
                            cbLoadTask={loadDetails}
                          />
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {toggleCreateTask && (
        <div
          className="absolute top-0 left-0 w-full min-h-full text-black flex justify-center items-start flex-col"
          style={{
            background: "rgb(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          <h2
            className="text-white h-[60px]  w-full border-b p-2 text-xl flex justify-between items-center font-medium mb-2"
            style={{ borderColor: "rgb(255, 255, 255, 0.4)" }}
          >
            Create Your Task{" "}
            <IoCloseCircleSharp
              className="text-3xl cursor-pointer"
              title="create Task"
              onClick={handleToggleCreateTask}
              style={{ color: "#e5532d" }}
            />
          </h2>
          <CreateTask
            cbFun={handleToggleCreateTask}
            cbLoadFun={loadDetails}
            goalID={state?._id}
          />
        </div>
      )}
    </div>
  );
}

export default DetailsGoalView;
