const validation = (values) => {
  let errors = {};

  if (!values.fullname) {
    errors.fullNameError = true;
    errors.errMsg = "Name is required.";
  } else if (!values.email) {
    errors.emailError = true;
    errors.errMsg = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.emailError = true;
    errors.errMsg = "Email is invalid.";
  } else if (!values.password) {
    errors.passwordError = true;
    errors.errMsg = "Password is required.";
  } else if (values.password.length < 5) {
    errors.passwordError = true;
    errors.errMsg = "Password must be more than five characters.";
  }

  return errors;
};

export default validation;
