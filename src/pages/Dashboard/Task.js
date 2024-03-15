import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Task() {
  const navigateTO = useNavigate();
  const [allTasks, setallTasks] = useState([]);

  useEffect(() => {}, []);
  return (
    <div
      className="w-7/12 mx-auto pb-5 min-h-full overflow-hidden overflow-y-auto p-2 text-white"
      style={{ background: "rgb(0, 0, 0, 0.1)", backdropFilter: "blur(50px)" }}
    >
      <div className="min-h-[300px] flex">
        {allTasks.length === 0 ? (
          <p className="m-auto font-bold text-4xl text-center flex flex-col gap-5">
            You does not have any task !{" "}
            <span className="text-xl text-gray-400">
              Want to add your first task ?
            </span>
          </p>
        ) : (
          <></>
        )}
      </div>
      <button
        className="block mx-auto my-3 w-[220px] border h-[45px] rounded-md cursor-pointer"
        onClick={() => navigateTO("/dashboard/goal/create-task")}
      >
        Add new task
      </button>
    </div>
  )
}

export default Task
