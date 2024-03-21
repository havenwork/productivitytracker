import React, { useState } from "react";
import rocketImg from "../../img/Space-X-Dragon.png";
import GenerategreetingMsg from "../../helpers/GreetingMsg";
// import axios from "axios";
import ComponentLoader from "../../components/ComponentLoader";
import { useSelector } from "react-redux";
function Dashboard() {
  const [Loader] = useState(true);
  const { userName } = useSelector((state) => state.productivityTracker);

  return (
    <div className="w-full mx-auto pb-5 min-h-full p-2 text-white flex flex-col justify-center items-center">
      <h1 className="text-2xl p-2 mb-5 sm:text-3xl">
        {GenerategreetingMsg()} {userName}
      </h1>

      <div className="flex items-center justify-center flex-col w-full relative">
        <div className="w-[100%] grid grid-cols-2 gap-5 msm:auto-cols-fr msm:w-fit sm:w-full sm:grid-cols-3 sm:gap-y-5 lg:w-10/12 xl:w-9/12 xl:grid-cols-3 p-1 2xl:w-full">
          <div
            className="w-[100%]  h-[150px]  rounded-2xl xsm:h-[175px] msm:w-[175px] msm:gap-0 items-center justify-center relative"
            style={{ background: "rgb(255, 255, 255, 0.15)" }}
          >
            {Loader ? <ComponentLoader /> : <h1>Data</h1>}
          </div>

          <div
            className="w-[100%] h-[150px] rounded-2xl xsm:h-[175px] msm:w-[175px] sm:justify-self-center relative"
            style={{ background: "rgb(255, 255, 255, 0.15)" }}
          >
            {Loader ? <ComponentLoader /> : <h1>Data</h1>}
          </div>

          <div
            className="w-[100%]  h-[150px]  rounded-2xl xsm:h-[175px] msm:w-[175px] sm:col-span-1
            sm:justify-self-end relative"
            style={{ background: "rgb(255, 255, 255, 0.15)" }}
          >
            {Loader ? <ComponentLoader /> : <h1>Data</h1>}
          </div>

          <div
            className="w-[100%]  h-[150px]  rounded-2xl xsm:h-[175px] msm:w-[175px] relative"
            style={{ background: "rgb(255, 255, 255, 0.15)" }}
          >
            {Loader ? <ComponentLoader /> : <h1>Data</h1>}
          </div>

          <div
            className="w-[100%]  h-[150px]  rounded-2xl xsm:h-[175px] msm:w-[175px] sm:col-span-2 sm:justify-self-end  xl:justify-self-end relative"
            style={{ background: "rgb(255, 255, 255, 0.15)" }}
          >
            {Loader ? <ComponentLoader /> : <h1>Data</h1>}
          </div>
        </div>

        <img
          src={rocketImg}
          alt=""
          className="hidden relative top-[-8em] sm:block sm:w-[50vw] md:w-[18em]"
        />
      </div>
    </div>
  );
}

export default Dashboard;
