import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ComponentLoader from "../../components/ComponentLoader";
import { FaPlusCircle } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { message } from "antd";
import CreateGoal from "./CreateGoal";
function Goal() {
  const { userID } = useSelector((state) => state.productivityTracker);
  const [Loader, setLoader] = useState(false);
  const [allGoal, setallGoal] = useState([]);
  const [toggleCreategoal, setTooglecreateGoal] = useState(false);

  const handleToggleCreateGoal = (e) => {
    setTooglecreateGoal(!toggleCreategoal);
  };

  const loadGoal = () => {
    setLoader(true);
    axios.get(`http://localhost:6766/goal/goals/${userID}`).then((response) => {
      setallGoal(response.data.goals);
      setLoader(false);
    });
  };

  const handleDeleteGoal = (e, goalID) => {
    e.preventDefault();
    setLoader(true);
    axios
      .delete(`http://localhost:6766/goal/delete-goal/${goalID}`)
      .then((response) => {
        if (response.data.success) {
          message.success("Goal deleted successfully");
          setLoader(false);
          loadGoal();
        } else {
          message.error("Goal not found");
          setLoader(false);
          loadGoal();
        }
      })
      .catch((err) => {
        message.error(`Something went wrong! ${err.message}`);
        setLoader(false);
        loadGoal();
      });
  };

  useEffect(loadGoal, [userID]);
  return (
    <div
      className="w-full mx-auto pb-5 overflow-hidden overflow-y-auto text-white h-full"
      style={{ background: "rgb(0, 0, 0, 0.1)", backdropFilter: "blur(50px)" }}
    >
      <h1
        className="h-[80px] border-b p-2 text-2xl flex justify-between items-center font-medium"
        style={{ borderColor: "rgb(255, 255, 255, 0.4)" }}
      >
        Your Goals
        {toggleCreategoal ? (
          <IoCloseCircleSharp
            className="text-3xl cursor-pointer xsm:hidden"
            title="create Task"
            onClick={handleToggleCreateGoal}
            style={{ color: "#e5532d" }}
          />
        ) : (
          <FaPlusCircle
            className="text-3xl cursor-pointer xsm:hidden"
            title="create Task"
            onClick={handleToggleCreateGoal}
            style={{ color: "#3bbc6c" }}
          />
        )}
        <button
          type="button"
          className="hidden xsm:block text-sm w-[120px] p-2 rounded-md sm:w-[170px] sticky top-0"
          style={{ background: `${toggleCreategoal ? "#e5532d" : "#3bbc6c"}` }}
          onClick={handleToggleCreateGoal}
        >
          {toggleCreategoal ? "Close" : " Create"}
        </button>
      </h1>

      <div
        className={`relative min-h-[calc(100%-90px)] ${
          allGoal.length === 0
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
                {allGoal.length === 0 ? (
                  <p className="m-auto font-bold text-4xl text-center flex flex-col gap-x-5">
                    You do not have any goal !{" "}
                    <span className="text-xl text-gray-400">
                      Want to create your first goal ?
                    </span>
                  </p>
                ) : (
                  <>
                    {allGoal.map((goal, index) => {
                      return (
                        <div
                          key={index}
                          className="border w-[98%] h-[320px] mt-2 rounded-md xsm:w-full relative"
                          style={{
                            borderColor: "rgb(255, 255, 255, 0.2",
                            backgroundColor: "rgb(255, 255, 255, 0.05)",
                          }}
                        >
                          <Link className="block no-underline font-sm p-2 hover:text-orange-300">
                            {goal.title.slice(0, 20)}...
                          </Link>
                          <MdDelete
                            className="absolute top-2 right-2 text-2xl cursor-pointer hover:text-red-600"
                            title="Delete goal"
                            onClick={(e) => handleDeleteGoal(e, goal._id)}
                          />
                          <p className="border-t border-b p-2 my-2 flex items-center justify-between">
                            <span
                              className={`text-right font-semibold ${
                                goal.status === "Todo" && "text-blue-500"
                              } ${
                                goal.status === "In Progress" &&
                                "text-orange-500"
                              } ${
                                goal.status === "Complete" && "text-green-500"
                              }`}
                            >
                              {goal.status}
                            </span>
                            <span
                              className={`text-right font-semibold ${
                                goal.priority === "High" && "text-red-500"
                              } ${
                                goal.priority === "Medium" && "text-red-400"
                              } ${goal.priority === "Low" && "text-red-300"}`}
                            >
                              {goal.priority}
                            </span>
                          </p>

                          <p className="my-3 px-2">
                            Start Date:
                            <span className="ml-2 font-semibold">
                              {goal.startDate.split("T")[0]}
                            </span>
                          </p>
                          <p className="my-3 px-2">
                            End Date:
                            <span className="ml-2 font-semibold">
                              {goal.endDate.split("T")[0]}
                            </span>
                          </p>

                          <p className="my-5 px-2 flex items-center justify-center gap-2">
                            <SlCalender className="text-sm" />
                            <span className="mr-2 font-semibold text-lg">
                              0
                            </span>
                            Days Overdue
                          </p>

                          <button
                            type="button"
                            className="h-[60px] absolute bottom-0 border-t text-xl font-semibold block w-full rounded-b-md p-2 hover:text-orange-400"
                          >
                            View Details
                          </button>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            }
          </>
        )}

        {toggleCreategoal && (
          <div
            className="absolute top-0 left-0 w-full h-full text-black flex justify-center items-start overflow-hidden"
            style={{
              background: "rgb(0,0,0,0.5)",
              backdropFilter: "blur(100px)",
            }}
          >
            <CreateGoal
              cbLoadFun={loadGoal}
              cbToggleCreate={handleToggleCreateGoal}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Goal;
