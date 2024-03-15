import React from "react";
import background_png from "../../img/background.png";
import { Outlet } from "react-router-dom";
import Navbardashboard from "./Navbar_dashboard";
function DashboardContainer() {
  return (
    <div
      className="h-screen overflow-hidden bg-cover flex justify-between items-center"
      style={{ backgroundImage: `url(${background_png})` }}
    >
      <div className="h-full w-[320px] text-white border">
        Reminder Show hoga yha pa
      </div>

      <div className="h-full" style={{ width: "calc(100% - 650px)" }}>
        <div className="h-[720px] flex items-center">
          <Outlet />
        </div>

        <div
          className="h-[75px] mt-3"
          style={{ background: "rgb(0, 0, 0, 0.15)" }}
        >
          <Navbardashboard />
        </div>
      </div>

      <div className="h-full w-[320px] text-white border">
        progress of tasks and goal
      </div>
    </div>
  );
}

export default DashboardContainer;
