import React from "react";
import GenerategreetingMsg from "../../helpers/GreetingMsg";

function Dashboard() {
  return (
    <div className="w-full mx-auto pb-5 min-h-full overflow-hidden overflow-y-auto p-2 text-white">
      <h1 className="w-full text-center p-3 font-medium text-2xl">
        {GenerategreetingMsg()} <span className="ml-3">Mr_Mahi</span>
      </h1>

      Your Tasks
     <div className="border border-red-500 my-3 grid grid-cols-4 justify-items-center content-center gap-6 p-2">
     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
      Total Goals
      <br />
      0
     </p>
     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
     Completed Goals
      <br />
      0
     </p>
     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
  To do goals
      <br />
      0
     </p>
     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
     In Progress goals
      <br />
      0
     </p>
     </div>

     Your Goals
     <div className="border border-red-500 my-3 grid grid-cols-4 justify-items-center content-center gap-6 p-2">

     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}></p>
     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}></p>
     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}></p>
     <p className="inline-block w-[220px] h-[220px] rounded-2xl" style={{ background: "rgba(255, 255, 255, 0.1)" }}></p>
     </div>
     
    </div>
  );
}

export default Dashboard;
