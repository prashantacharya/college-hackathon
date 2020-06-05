const createToken = require('../utils/jwt');

const login = (req, res) => {
  if (
    req.body.email == process.env.AUTH_EMAIL &&
    req.body.password === process.env.AUTH_PASSWORD
  )
    res.send({
      status: 'Success',
      token: createToken(),
    });
  else
    res.status(403).send({
      status: 'Error',
      message: 'Authentication failed',
    });
};

module.exports = login;
