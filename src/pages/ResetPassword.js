import React, { useState } from "react";
import lock_svg from "../icons/lock.svg";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Loader from "../components/Loader";
import * as Yup from "yup";

function ResetPassword() {
  const [ShowPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    setErrors({});
    if (e.target.name !== "name" && e.target.value.includes(" ")) {
      e.target.value = e.target.value.replaceAll(" ", "");
    }
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };
  const handleShowPasswordClick = (e) => {
    e.preventDefault();
    setShowPassword(!ShowPassword);
  };

  const resetPasswordSchema = Yup.object({
    newPassword: Yup.string()
      .min(5, "Password should be at least 5 characters long")
      .required("Password required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Password does not match")
      .required("Password required"),
  });

  const handlResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPasswordSchema.validate(passwords, {
        abortEarly: false,
      });
      setLoading(true)

    } catch (err) {
      let newError = {};
      err.inner.forEach((item) => {
        newError[`${item.path}Error`] = true;
        newError[`${item.path}Msg`] = item.message;
      });
      setErrors(newError);
    }
  };

  return (
    <div className="w-full p-1 py-5 flex align-start flex-col justify-center px-2 xsm:w-400 mx-auto md:w-550 lg:w-550 xl:w-600 lg:px-14">
      {/* Primary heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2 w-full xsm: pl-1 lg:text-3xl">
        Reset your password!
      </h1>
      {/* Secondary heading */}
      <h3 className="text-gray-500 text-sm  w-full xsm: pl-1 lg:text-lg">
        Activate your access: Sign up for a seamless experience.
      </h3>
      {/* Signup form */}
      <form className="w-full mt-5">
        <div className="mb-6">
          <label htmlFor="newPassword" className="font-light text-gray-800">
            New password
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
              name="newPassword"
              id="newPassword"
              placeholder="Enter new password"
              autoComplete="new-password"
              className="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
              onChange={handleOnChange}
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
          {errors?.newPasswordError && (
            <span className="block pl-2 text-red-600 font-semibold italic">
              {errors?.newPasswordMsg}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="font-light text-gray-800">
            Confirm Password
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
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              autoComplete="new-password"
              className="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 border-red-600 h-full"
              onChange={handleOnChange}
            />
          </div>
          {errors?.confirmPasswordError && (
            <span className="block pl-2 text-red-600 font-semibold italic">
              {errors?.confirmPasswordMsg}
            </span>
          )}
        </div>

        <div className="pt-8">
          <button
            type="submit"
            className="relative h-14 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none"
            onClick={handlResetPassword}
          >
            {isLoading ? <Loader /> : "Reset"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
