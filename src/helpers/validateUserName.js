export const isUserName = (username, errMessage) => {
  if (username === "") {
    errMessage.msg = "Username required.";
    return false;
  }
  if (username.length < 6) {
    errMessage.msg = "Username should be at least 6 characters long.";
    return false;
  }

  return true;
};
