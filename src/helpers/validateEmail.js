export const isEmail = (email, errMessage) => {
  if (email === "") {
    errMessage.msg = "Email required";
    return false;
  }

  if (!email.includes("@gmail.com")) {
    errMessage.msg = "Invalid email address";
    return false;
  }

  return true;
};
