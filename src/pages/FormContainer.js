import React, { useEffect, useState } from "react";
import logo_svg from "../icons/logo.svg";
import hero_png from "../icons/hero.png";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { message } from "antd";
import ComponentLoader from "../components/ComponentLoader";
function FormContainer() {
  const [Loader, setLoader] = useState(false);
  const { Token, userID } = useSelector((state) => state.productivityTracker);
  const { pathname } = useLocation();
  const navigateTO = useNavigate();
  useEffect(() => {
    setLoader(true);
    axios
      .post(`http://localhost:6766/verify/token`, { Token, userID })
      .then((response) => {
        setLoader(false);
        if (response.data.success) {
          navigateTO(`/dashboard/user/${response.data.userID}`);
        } else {
          message.error("Token Expired! Login Again");
          navigateTO("/login");
        }
      })
      .catch((err) => {
        message.error("Token Expired! Login Again");
        navigateTO("/login");
        setLoader(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Token, userID]);
  return (
    <div className="min-h-screen font-sans bg-gray-100 flex justify-between">
      <div
        className="hidden overflow-hidden  w-1/2 lg:block bg-no-repeat bg-center bg-cover relative "
        style={{ backgroundImage: `url(${hero_png})` }}
      >
        <div className="flex absolute bottom-10 justify-center flex-col w-full align-middle gap-2">
          <span className="text-3xl font-bold leading-loose text-gray-900 w-full text-center">
            {pathname === "/ResetPassword"
              ? " Reset your password!"
              : "Productivity Tracker"}
          </span>

          <p className="font-light leading-7 text-gray-500 w-full text-center lg:text-2xl mx-auto px-16">
            {pathname === "/ResetPassword"
              ? "Optimize your online security by reconfiguring your password settings regularly."
              : "  Maximize Your Day: Empower productivity with our intuitive tracker, turning tasks into accomplishments."}
          </p>
        </div>
      </div>

      <div
        className={`min-h-screen w-full relative lg:w-1/2 lg:px-5 py-10 flex items-center`}
      >
        <img
          src={logo_svg}
          alt="Logo"
          className="w-32 absolute top-5 right-5"
        />

        <div className="h-full w-full flex relative">
          {Loader ? <ComponentLoader /> : <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
