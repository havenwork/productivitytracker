exports.signupValidator = (req, res, next) => {
  const { name, email, password, username} = req.body;

  if (name && email && password && username) {
    next();
  } else {
    res.status(400).send({ msg: "All input fields are required." });
  }
};
