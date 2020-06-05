const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authToken = req.headers.authorization.split(' ')[1];
  try {
    let decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    if (decoded) next();
  } catch (err) {
    res.status(403).send({
      status: 'Error',
      message: 'Unauthorized',
    });
  }
};

module.exports = authenticate;
