const validateLoginDetails = ({ username, password }) => {
  const errors = {};
  if (username === "") {
    errors.userNameError = true;
    errors.errMsg = "Email or Username required.";
    return errors;
  } else if (password === "") {
    errors.passwordError = true;
    errors.errMsg = "Required";
    return errors;
  } else if (password.length < 5) {
    errors.passwordError = true;
    errors.errMsg = "Password must be more than five characters.";
    return errors;
  } else {
    return false;
  }
};

export default validateLoginDetails;
