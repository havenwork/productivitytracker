// ForgotPassword.jsx
import React from "react";
import email_svg from "../icons/email.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const handleResetPasswordClick = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="w-full h-full p-1 pt-10 flex align-start flex-col justify-center px-4 xsm:w-400 mx-auto xsm:p-0 xsm:pt-10 md:w-550 xl:w-600 lg:px-14">
        {/* Primary heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 w-full xsm: pl-1 lg:text-4xl">
        Hi, Welcome back!
      </h1>
      {/* Secondary heading */}
      <h3 className="text-gray-500 text-lg  w-full xsm: pl-1 lg:text-lg">
        Ready, set, login! Your personalized experience awaits.
      </h3>
      <form action="" className="pt-6 mt-5">
        <div className="mb-4">
          <label htmlFor="email" className="font-light text-gray-800">
            Email address
          </label>
          <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
            <div className="w-14 h-full  flex justify-center">
              <img src={email_svg} alt="SVGICON" className="w-5" />
            </div>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              autoComplete="current-email"
              className="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
            />
          </div>
        </div>

        <div className="pt-8">
          <button
            type="submit"
            className="py-3 px-2 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none"
            onClick={handleResetPasswordClick}
          >
            Reset Password
          </button>
        </div>

        <div className="pt-2">
          <div className="font-light text-center text-gray-500">
            Not registered yet?
            <Link
              className=" font-medium ml-2 text-blue-500 hover:text-blue-600"
              to={"/signup"}
            >
              Create an Account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
