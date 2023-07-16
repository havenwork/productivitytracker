import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateForm = () => {
    const newErrors = [];

    if (username.trim() === "") {
      newErrors.push("Enter your username");
    } else {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const phonePattern = /^\d{10}$/;

      if (!emailPattern.test(username) && !phonePattern.test(username)) {
        newErrors.push("Enter a valid email/phone number");
      }
    }

    if (password.trim() === "") {
      newErrors.push("Enter your password");
    }

    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoginSuccess(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "#4863A0", fontSize: "40px", fontFamily: "Serif" }}>
          Welcome
        </h2>
        <h3>
          <center> Login here! </center>
        </h3>
        &nbsp;
        <div className="form-group username">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter email/phone number"
            value={username}
            onChange={handleUsernameChange}
          />
          {errors.includes("Enter your username") && (
            <small className="error-text">Enter your username</small>
          )}
          {errors.includes("Enter a valid email/phone number") && (
            <small className="error-text">Enter a valid username</small>
          )}
        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.includes("Enter your password") && (
            <small className="error-text">Enter your password</small>
          )}
          <i
            id="pass-toggle-btn"
            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
          {loginSuccess && (
            <p style={{ textAlign: "center", color: "green" }}>
              Login successful
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginPage;
