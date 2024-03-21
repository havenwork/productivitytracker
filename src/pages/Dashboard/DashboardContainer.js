import React, { useEffect, useState } from "react";
import background_png from "../../img/background.png";
import { Outlet, useNavigate } from "react-router-dom";
import Navbardashboard from "./Navbar_dashboard";
import RemindTwo from "../RemindTwo";
import { useSelector } from "react-redux";
import axios from "axios";
import { message } from "antd";
import ComponentLoader from "../../components/ComponentLoader";
function DashboardContainer() {
  const [Loader, setLoader] = useState(true);
  const { Token, userID } = useSelector((state) => state.productivityTracker);
  const navigateTO = useNavigate();
  useEffect(() => {
    setLoader(true);
    axios
      .post(`http://localhost:6766/verify/token`, { Token, userID })
      .then((response) => {
        setLoader(false);
        if (!response.data.success) {
          message.error("Token Expired! Login Again");
          navigateTO("/login");
        }
      })
      .catch((err) => {
        message.error("Token Expired! Login Again");
        navigateTO("/login");
        setLoader(false);
      });
  }, [Token, navigateTO, userID]);
  return (
    <div
      className="h-[100dvh] overflow-hidden bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${background_png})` }}
    >
      <div className="h-full w-[320px] text-white hidden xl:block overflow-hidden overflow-y-auto">
        <RemindTwo />
      </div>

      <div className="h-full w-full xl:w-[calc(100%-650px)]">
        <div className="overflow-hidden overflow-y-auto h-[calc(100dvh-90px)] relative">
          {Loader ? <ComponentLoader /> : <Outlet />}
        </div>

        <div
          className="stickey bottom-0 w-full h-[75px] mt-3 z-10"
          style={{ background: "rgb(0, 0, 0, 0.15)" }}
        >
          <Navbardashboard />
        </div>
      </div>

      <div className="h-full w-[320px] text-white hidden xl:block  overflow-hidden overflow-y-auto">
        <RemindTwo />
      </div>
    </div>
  );
}

export default DashboardContainer;
