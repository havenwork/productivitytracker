import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ComponentLoader from "../../components/ComponentLoader";
import { FaPlusCircle } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import CreateGoal from "./CreateGoal";
import Card from "../../components/Card";
function Goal() {
  const { userID } = useSelector((state) => state.productivityTracker);
  const [Loader, setLoader] = useState(false);
  const [allGoal, setallGoal] = useState([]);
  const [toggleCreategoal, setTooglecreateGoal] = useState(false);

  const handleToggleCreateGoal = (e) => {
    setTooglecreateGoal(!toggleCreategoal);
  };

  const loadGoal = useCallback(() => {
    setLoader(true);
    axios.get(`http://localhost:6766/goal/goals/${userID}`).then((response) => {
      setallGoal(response.data.goals);
      setLoader(false);
    });
  }, [userID]);

  useEffect(loadGoal, [loadGoal]);
  return (
    <div
      className="w-full mx-auto pb-5 overflow-hidden overflow-y-auto text-white h-full"
      style={{ background: "rgb(0, 0, 0, 0.1)", backdropFilter: "blur(50px)" }}
    >
      <h1
        className="h-[80px] border-b p-2 text-2xl flex justify-between items-center font-medium"
        style={{ borderColor: "rgb(255, 255, 255, 0.4)" }}
      >
        Your Goals : {allGoal.length}
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
        className={`relative min-h-[calc(100%-90px)] flex items-center justify-evenly flex-wrap gap-6`}
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
                        <Card
                          data={goal}
                          key={index}
                          cardType="goal"
                          cbLoadTask={loadGoal}
                        />
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
            className="absolute top-0 left-0 w-full min-h-full text-black flex justify-center items-start "
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
