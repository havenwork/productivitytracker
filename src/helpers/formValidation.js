const validateUserDetails = ({ name, email, password, username }) => {
  const errors = {};

  const nameArr = name.split(" ");
  if (username === "") {
    errors.userNameError = true;
    errors.errMsg = "Username is required.";
    return errors;
  } else if (username.length < 6) {
    errors.userNameError = true;
    errors.errMsg = "Username should be at least 6 characters long";
    return errors;
  }
  // validateing name
  else if (name === "") {
    errors.fullNameError = true;
    errors.errMsg = "Name is required.";
    return errors;
  } else if (nameArr.length !== 2) {
    errors.fullNameError = true;
    errors.errMsg = "Full name required.";
    return errors;
  } else if (
    !nameArr[0].split("").every((char) => isNaN(char)) ||
    !nameArr[1].split("").every((char) => isNaN(char))
  ) {
    errors.fullNameError = true;
    errors.errMsg = "Name must not contain numeric values.";
    return errors;
  } else if (nameArr[0]?.length < 3 || nameArr[1]?.length < 3) {
    errors.fullNameError = true;
    errors.errMsg = "Invalid name.";
    return errors;
  }
  //   validaing email
  else if (email === "") {
    errors.emailError = true;
    errors.errMsg = "email is required.";
    return errors;
  } else if (!email.includes("@gmail.com")) {
    errors.emailError = true;
    errors.errMsg = "Email is invalid.";
    return errors;
  }
  //  validating password
  else if (password === "") {
    errors.passwordError = true;
    errors.errMsg = "Password is required.";
    return errors;
  } else if (password.length < 5) {
    errors.passwordError = true;
    errors.errMsg = "Password must be more than five characters.";
    return errors;
  } else {
    return false;
  }
};

export default validateUserDetails;
