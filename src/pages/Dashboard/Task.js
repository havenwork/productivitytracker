import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ComponentLoader from "../../components/ComponentLoader";
import { FaPlusCircle } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import Card from "../../components/Card";
import CreateTask from "./CreateTask";
function Task() {
  const { userID } = useSelector((state) => state.productivityTracker);
  const [Loader, setLoader] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [toggleCreateTask, settoggleCreateTask] = useState(false);

  const handletoggleCreateTask = (e) => {
    settoggleCreateTask(!toggleCreateTask);
  };
  const loadTasks = useCallback(() => {
    setLoader(true);
    axios
      .get(`http://localhost:6766/task/all-tasks/${userID}`)
      .then((response) => {
        setLoader(false);
        if (response.data.success) {
          setAllTasks(response.data.allTasks);
        } else {
          setAllTasks([]);
        }
      })
      .catch((err) => {
        setLoader(false);
      });
  }, [userID]);
  useEffect(loadTasks, [loadTasks]);
  return (
    <div
      className="w-full mx-auto pb-5 overflow-hidden overflow-y-auto text-white h-full"
      style={{ background: "rgb(0, 0, 0, 0.1)", backdropFilter: "blur(50px)" }}
    >
      <h1
        className="h-[80px] border-b p-2 text-2xl flex justify-between items-center font-medium"
        style={{ borderColor: "rgb(255, 255, 255, 0.4)" }}
      >
        Your Tasks : {allTasks.length}
        {toggleCreateTask ? (
          <IoCloseCircleSharp
            className="text-3xl cursor-pointer xsm:hidden"
            title="create Task"
            onClick={handletoggleCreateTask}
            style={{ color: "#e5532d" }}
          />
        ) : (
          <FaPlusCircle
            className="text-3xl cursor-pointer xsm:hidden"
            title="create Task"
            onClick={handletoggleCreateTask}
            style={{ color: "#3bbc6c" }}
          />
        )}
        <button
          type="button"
          className="hidden xsm:block text-sm w-[120px] p-2 rounded-md sm:w-[170px] sticky top-0"
          style={{ background: `${toggleCreateTask ? "#e5532d" : "#3bbc6c"}` }}
          onClick={handletoggleCreateTask}
        >
          {toggleCreateTask ? "Close" : " Create"}
        </button>
      </h1>

      <div
        className={`relative min-h-[calc(100%-90px)] ${
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
                      Want to add tasks ?
                    </span>
                  </p>
                ) : (
                  <>
                    {allTasks.map((task, index) => {
                      return (
                        <Card
                          data={task}
                          key={index}
                          cardType="task"
                          cbLoadTask={loadTasks}
                        />
                      );
                    })}
                  </>
                )}
              </>
            }
          </>
        )}

        {toggleCreateTask && (
          <div
            className="absolute top-0 left-0 w-full min-h-full text-black flex justify-center items-start "
            style={{
              background: "rgb(0,0,0,0.5)",
              backdropFilter: "blur(100px)",
            }}
          >
            <CreateTask cbLoadFun={loadTasks} cbFun={handletoggleCreateTask} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Task;
