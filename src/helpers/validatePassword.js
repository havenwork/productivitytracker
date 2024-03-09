export const isPassword = (passowrd, errMessage) => {
  if (passowrd === "") {
    errMessage.msg = "Password required";
    return false;
  }

  if (passowrd.length < 5) {
    errMessage.msg = "Password must be more than five characters.";
    return false;
  }

  return true;
};
