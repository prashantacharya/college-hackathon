const jwt = require('jsonwebtoken');

const createToken = () => {
  const token = jwt.sign(
    { data: process.env.AUTH_EMAIL },
    process.env.JWT_SECRET,
    { expiresIn: '30 days' }
  );

  return token;
};

module.exports = createToken;
