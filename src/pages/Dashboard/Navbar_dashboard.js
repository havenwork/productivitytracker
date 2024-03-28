import React from "react";
import { NavLink } from "react-router-dom";
import { GoGoal } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
function Navbar_dashboard() {
  return (
    <nav className="h-full flex items-center justify-evenly px-1 w-full">
    
      <NavLink
        to={`/dashboard/user/${localStorage.getItem("userID")}`}
        className="h-[50px] w-[50px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Dashboard"
      >
        <MdDashboardCustomize />
      </NavLink>

      <NavLink
        to="/dashboard/user/goals"
        className="h-[50px] w-[50px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Goals"
      >
        <GoGoal />
      </NavLink>

      <NavLink
        to="/dashboard/user/tasks"
        className="h-[50px] w-[50px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Tasks"
      >
        <FaTasks />
      </NavLink>

      <NavLink
        to="/dashboard/user/setting"
        className="h-[50px] w-[50px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Setting"
      >
        <IoSettingsSharp />
      </NavLink>


    </nav>
  );
}

export default Navbar_dashboard;
