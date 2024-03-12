import React, { useRef, useState } from "react";
import { RiUser2Line } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import email_svg from "../icons/email.svg";
import lock_svg from "../icons/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import Loader from "../components/Loader";

import * as Yup from "yup";

function Signup() {
  const navigateTO = useNavigate();
  const userNameRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
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

  const signUpSchema = Yup.object({
    username: Yup.string()
      .min(6, "Username should be at least 6 characters long")
      .required("Username required"),
    name: Yup.string()
      .min(3, "Name should be at least 3 characters long")
      .max(20, "Name should be at least 20 characters long")
      .required("Full name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
      .min(5, "Password should be at least 5 characters long")
      .required("Password required"),
  });

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    try {
      await signUpSchema.validate(values, {
        abortEarly: false,
      });

      setLoading(true);
      axios
        .post("https://productivitytrackerbe.onrender.com/signup", values)
        .then((response) => {
          setLoading(false);
          if (response.data.errMsg === "User created successfully") {
            message.success(`${response.data.errMsg}`);
            navigateTO("/login");
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
          setLoading(true);
          message.error(error.message);
        });
    } catch (err) {
      let newError = {};
      err.inner.forEach((item) => {
        newError[`${item.path}Error`] = true;
        newError[`${item.path}Msg`] = item.message;
      });
      setErrors(newError);
    }
  };

  
  const handleShowPasswordClick = (e) => {
    e.preventDefault();
    setShowPassword(!ShowPassword);
  };

  return (
    <div className="w-full p-1 py-5 flex align-start flex-col justify-center px-2 xsm:w-400 mx-auto md:w-550 lg:w-550 xl:w-600 lg:px-14">
      {/* Primary heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2 w-full xsm: pl-1 lg:text-3xl">
        Get Started!
      </h1>
      {/* Secondary heading */}
      <h3 className="text-gray-500 text-sm  w-full xsm: pl-1 lg:text-lg">
        Activate your access: Sign up for a seamless experience.
      </h3>
      {/* Signup form */}
      <form className="w-full mt-5">
        <div className="mb-4">
          <label htmlFor="username" className="font-light text-gray-800">
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
          {errors?.usernameError && (
            <span className="block pl-2 text-red-600 font-semibold italic">
              {errors?.usernameMsg}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="font-light text-gray-800">
            Full name
          </label>
          <div
            className={`flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500 ${
              errors?.nameError && `border-1 border-red-600`
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
              ref={nameRef}
            />
          </div>
          {errors?.nameError && (
            <span className="block pl-2 text-red-600 font-semibold italic">
              {errors?.nameMsg}
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
              {errors?.emailMsg}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="font-light text-gray-800">
            Password
          </label>
          <div
            className={`flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500 ${
              errors?.passwordError && `border-1 border-red-600`
            }`}
          >
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
              ref={passwordRef}
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
              {errors?.passwordMsg}
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
          <label htmlFor="remember" className="pl-4 font-light text-gray-900">
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
          <div className="font-light text-center text-gray-500 text-lg">
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
  );
}

export default Signup;
