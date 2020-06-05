const sendResult = require('../utils/mailer');

const mailer = async (req, res) => {
  try {
    await sendResult(req.body);
    res.send({ status: 'Success', payload: req.body });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'Error',
      message: 'Could not send email, please try again',
    });
  }
};

module.exports = mailer;
