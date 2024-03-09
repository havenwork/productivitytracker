export const isFullName = (fullname, errMessage) => {
  const nameArr = fullname.split(" ");

  if (fullname === "") {
    errMessage.msg = "Required";
    return false;
  }

  if (nameArr.length !== 2) {
    errMessage.msg = "Last name required.";
    return false;
  }

  if (
    !nameArr[0].split("").every((char) => isNaN(char)) ||
    !nameArr[1].split("").every((char) => isNaN(char))
  ) {
    errMessage.msg = "Name must not contain numeric values.";
    return false;
  }

  if (nameArr[0]?.length < 3 || nameArr[1]?.length < 3) {
    errMessage.msg = "Invalid full name";
    return false;
  }
  
  if (fullname.length > 20) {
    errMessage.msg = "Name should be within 20 characters";
    return false;
  }


  return true;
};
