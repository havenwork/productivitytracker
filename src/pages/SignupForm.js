import React, { useRef, useState } from "react";
import { RiUser2Line } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import hero_png from "../icons/hero.png";
import email_svg from "../icons/email.svg";
import logo_svg from "../icons/logo.svg";
import lock_svg from "../icons/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import validateUserDetails from "../helpers/formValidation";
import Loader from "../components/Loader";
const SignupForm = () => {
const navigateTO =  useNavigate();
  const userNameRef = useRef();
  const emailRef = useRef();
  const [ShowPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  // this method clear all the input fields
  const handleFieldClear = () => {
    setValues({
      username: "",
      name: "",
      email: "",
      password: "",
    });
  };

  const handleInputOnChange = (e) => {
    setErrors({});
    if (e.target.name !== "name" && e.target.value.includes(" ")) {
      e.target.value = e.target.value.replaceAll(" ", "");
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    const validationResponse = validateUserDetails(values);
    setErrors(validationResponse);

    if (!validationResponse) {
      setLoading(true);
      axios
        .post("https://productivitytrackerbe.onrender.com//signup", values)
        .then((response) => {
          setLoading(false);
          if (response.data.errMsg === "User created successfully") {
            message.success(`${response.data.errMsg}`);
            navigateTO("/login")
            handleFieldClear();
          } else if (response.data.errMsg === "Email already registered") {
            message.info(`${response.data.errMsg}`);
            emailRef.current.focus();
          } else if (response.data.errMsg === "User name not available") {
            message.info(`${response.data.errMsg}`);
            userNameRef.current.focus();
          } else {
            message.error("Something went wrong! try again");
            handleFieldClear();
            userNameRef.current.focus();
          }
        })
        .catch((error) => {
          message.error(error.message);
        });
    }
  };

  const handleShowPasswordClick = (e) => {
    setShowPassword(!ShowPassword);
  };

  return (
    <div className=" font-sans bg-gray-100">
      <div className="flex justify-between min-h-screen">
        <div
          className="hidden relative w-1/2  bg-center bg-cover lg:block"
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

        <div className="box-content px-8 pt-8 flex-1 mx-auto max-w-xl Authform__leftContaine">
          <div className="flex flex-col px-5 pt-3 lg:px-14 xl:px-20  leftContainer__formWrapper">
            <div className="pt-2 pb-6  w-full">
              <img
                src={logo_svg}
                alt="Logo"
                className="w-32 absolute top-5 right-5 "
              />
              <h1 className="text-3xl font-bold tracking-wide leading-loose FormWrapper__primaryHeading">
                Get Started!
              </h1>
              <span className="font-light text-gray-800 mb-8 FormWrapper__secondaryHeading">
                Activate your access: Sign up for a seamless experience.
              </span>
              {/* ############# */}

              <form className="pt-2 mt-2 w-full AuthForm">
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="font-light text-gray-800"
                  >
                    User name
                  </label>
                  <div
                    className={`flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500 ${
                      errors?.userNameError && `border-1 border-red-600`
                    }`}
                  >
                    <div className="w-14 h-full  flex justify-center">
                      <RiUser2Line className=" text-gray-500 reactUser__icon" />
                    </div>

                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your user name"
                      className="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
                      onChange={handleInputOnChange}
                      value={values.username}
                      maxLength={"20"}
                      autoComplete="off"
                      ref={userNameRef}
                    />
                  </div>
                  {errors?.userNameError && (
                    <span className="block pl-2 text-red-600 font-semibold italic">
                      {errors?.errMsg}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="font-light text-gray-800">
                    Full name
                  </label>
                  <div
                    className={`flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500 ${
                      errors?.fullNameError && `border-1 border-red-600`
                    }`}
                  >
                    <div className="w-14 h-full  flex justify-center">
                      <RiUser2Line className=" text-gray-500 reactUser__icon" />
                    </div>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      className="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
                      onChange={handleInputOnChange}
                      value={values.name}
                      maxLength={"20"}
                      autoComplete="off"
                    />
                  </div>
                  {errors?.fullNameError && (
                    <span className="block pl-2 text-red-600 font-semibold italic">
                      {errors?.errMsg}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="font-light text-gray-800">
                    Email address
                  </label>
                  <div
                    className={`flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500 ${
                      errors?.emailError && `border-1 border-red-600`
                    }`}
                  >
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
                      onChange={handleInputOnChange}
                      value={values.email}
                      ref={emailRef}
                    />
                  </div>
                  {errors?.emailError && (
                    <span className="block pl-2 text-red-600 font-semibold italic">
                      {errors?.errMsg}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="font-light text-gray-800"
                  >
                    Password
                  </label>
                  <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
                    <div className="w-14 h-full  flex justify-center">
                      <img src={lock_svg} alt="SVGICON" className="w-5" />
                    </div>

                    <input
                      type={`${ShowPassword ? "text" : "password"}`}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      autoComplete="new-password"
                      className="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
                      onChange={handleInputOnChange}
                      value={values.password}
                    />
                    {ShowPassword ? (
                      <BsFillEyeSlashFill
                        className="w-10 cursor-pointer"
                        onClick={handleShowPasswordClick}
                      />
                    ) : (
                      <BsFillEyeFill
                        className="w-10 cursor-pointer"
                        onClick={handleShowPasswordClick}
                      />
                    )}
                  </div>
                  {errors?.passwordError && (
                    <span className="block pl-2 text-red-600 font-semibold italic">
                      {errors?.errMsg}
                    </span>
                  )}
                </div>

                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-5 h-5 text-orange-500 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500"
                  />
                  <label
                    htmlFor="remember"
                    className="pl-4 font-light text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    onClick={handleSignUpClick}
                    className="relative h-14 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none"
                  >
                    {isLoading ? <Loader /> : "Sign up"}
                  </button>
                </div>

                <div className="pt-2">
                  <div className="font-light text-center text-gray-500">
                    Already have an account?
                    <Link
                      className=" font-medium ml-2 text-blue-500 hover:text-blue-600"
                      to={"/login"}
                    >
                      Sign in
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

export default SignupForm;
