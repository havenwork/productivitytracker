import axios from "axios";
import React, { useRef, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import email_svg from "../icons/email.svg";
import lock_svg from "../icons/lock.svg";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import validateLoginDetails from "../helpers/signInValidation";
import { message } from "antd";
function LoginPage() {
  const passwordRef = useRef();
  const userNameRef = useRef();
  const [ShowPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleClearFields = () => {
    setUserDetails({
      username: "",
      password: "",
    });
  };
  const handleInputOnChange = (e) => {
    setErrors({});
    if (e.target.value.includes(" ")) {
      e.target.value = e.target.value.replaceAll(" ", "");
    }
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    const validationResponse = validateLoginDetails(userDetails);
    setErrors(validationResponse);

    if (!validationResponse) {
      setLoading(true);
      try {
        axios
          .post("https://productivitytrackerbe.onrender.com/login", userDetails)
          .then((response) => {
            setLoading(false);
            if (response.data.errMsg === "Logged in successfully") {
              message.success(`${response.data.errMsg}`);
              console.log(response.data);
              handleClearFields();
            } else if (
              response.data.errMsg ===
              "No Account Found Associated with this username"
            ) {
              message.info(`${response.data.errMsg}`);
              userNameRef.current.focus();
              handleClearFields();
            } else if (response.data.errMsg === "Wrong password") {
              message.error(`${response.data.errMsg}`);
              passwordRef.current.focus();
            }
          });
      } catch (e) {}
    }
  };

  const handleShowPasswordClick = (e) => {
    setShowPassword(!ShowPassword);
  };
  return (
    <div className="w-full h-full p-1 pt-10 flex align-start flex-col justify-center px-4 xsm:w-400 mx-auto xsm:p-0 xsm:pt-10 md:w-550 xl:w-600 lg:px-14" >
      {/* Primary heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2 w-full xsm: pl-1 lg:text-4xl">
        Hi, Welcome back!
      </h1>
      {/* Secondary heading */}
      <h3 className="text-gray-500 text-lg  w-full xsm: pl-1 lg:text-lg">
        Ready, set, login! Your personalized experience awaits.
      </h3>
      {/* Login form */}
      <form className="w-full min-h-96 mt-5 ">
        <div className="mb-4">
          <label htmlFor="username" className="font-medium text-gray-800">
            Email or Username
          </label>
          <div
            className={`flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500 ${
              errors?.userNameError && `border-1 border-red-600`
            }`}
          >
            <div className="w-14 h-full  flex justify-center">
              <img src={email_svg} alt="SVGICON" className="w-5" />
            </div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter email or username"
              autoComplete="off"
              className="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
              onChange={handleInputOnChange}
              value={userDetails.username}
              ref={userNameRef}
            />
          </div>
          {errors.userNameError && (
            <span className="block pl-2 text-red-600 font-semibold italic text-sm">
              {errors.errMsg}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="font-medium text-gray-800">
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
              value={userDetails.password}
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
          {errors.passwordError && (
            <span className="block pl-2 text-red-600 font-semibold italic text-sm">
              {errors.errMsg}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-5 h-5 text-orange-500 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500 cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="pl-2 font-normal text-gray-900"
            >
              Remember me
            </label>
          </div>
          <Link
            className="text-blue-500 hover:text-blue-600 font-normal"
            to={"/ForgotPassword"}
          >
            {" "}
            Forgot password
          </Link>
        </div>

        <div className="pt-8">
          <button
            onClick={handleSigninClick}
            type="submit"
            className="relative h-14 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none"
          >
            {isLoading ? <Loader /> : "Sign in"}
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
}

export default LoginPage;
