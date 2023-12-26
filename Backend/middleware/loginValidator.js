const yup = require('yup');

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

exports.loginValidator = (req, res, next) => {
  const { username, password } = req.body;
console.log(req.body)
  loginSchema.validate({ username, password })
    .then(() => {
      next();
    })
    .catch((error) => {
      res.status(400).send({ msg: error.message });
    });
};

