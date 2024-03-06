// ForgotPassword.jsx
import React from "react";

import hero_png from "../icons/hero.png";
import email_svg from "../icons/email.svg";
import logo_svg from "../icons/logo.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="font-sans bg-gray-100">
      <div className="flex justify-between min-h-screen">
        <div
          className="hidden relative w-1/2 bg-center bg-cover lg:block"
          style={{ backgroundImage: `url(${hero_png})` }}
        >
          <div className="flex absolute bottom-20 justify-center w-full">
            <div className="max-w-md text-center">
              <span className="text-3xl font-bold leading-loose text-gray-900">
                Productivity Tracker
              </span>
              <p className="font-light leading-7 text-gray-500">
                Maximize Your Day: Empower productivity with our intuitive
                tracker, turning tasks into accomplishments.
              </p>
            </div>
          </div>
        </div>
        <div className="box-content px-8 py-8 flex-1 mx-auto max-w-xl">
          <div className="flex flex-col px-8 pt-3 lg:px-14 xl:px-24">
            <div className="pt-20 pb-6">
              <div className="flex self-end p-0">
                <img
                  src={logo_svg}
                  alt="Logo"
                  className="w-32 absolute top-5 right-5"
                />
              </div>
              <h1 className="text-3xl font-bold tracking-wide leading-loose">
                Hi, Welcome back!
              </h1>
              <span className="font-light text-gray-800 mb-8">
                Ready, set, login! Your personalized experience awaits.
              </span>

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
                      className="px-4 py-2 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="py-3 px-2 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
