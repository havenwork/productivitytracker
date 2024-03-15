import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
function Navbar_dashboard() {
  return (
    <nav className="h-full flex items-center justify-center gap-[3em] px-2 w-full">
    
      <NavLink
        to="/dashboard/user/Mr_Mahi"
        className="h-[60px] w-[60px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Dashboard"
      >
        <MdDashboardCustomize />
        {/* <span className="font-semibold mt-1">Profile</span> */}
      </NavLink>

      <NavLink
        to="/dashboard/user/profile"
        className="h-[60px] w-[60px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Profile"
      >
        <FaUser />
        {/* <span className="font-semibold mt-1">Profile</span> */}
      </NavLink>

      <NavLink
        to="/dashboard/user/goals"
        className="h-[60px] w-[60px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Goals"
      >
        <GoGoal />
        {/* <span className="font-semibold mt-1">Goal</span> */}
      </NavLink>

      <NavLink
        to="/dashboard/user/tasks"
        className="h-[60px] w-[60px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Tasks"
      >
        <FaTasks />
        {/* <span className="font-semibold mt-1">Task</span> */}
      </NavLink>

      <NavLink
        to="/dashboard/user/setting"
        className="h-[60px] w-[60px] flex items-center justify-center flex-col text-white text-[18px] dashboard__navlinkItem rounded-full"
        title="Setting"
      >
        <IoSettingsSharp />
        {/* <span className="font-semibold mt-1">Setting</span> */}
      </NavLink>


    </nav>
  );
}

export default Navbar_dashboard;
