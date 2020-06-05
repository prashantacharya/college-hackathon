const nodemailer = require('nodemailer');
const generateTemplate = require('./htmlTemplate');

async function sendResult(options) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from:
      '"Sagarmatha College of Science and Technology" <admin@sagarmatha.edu.np>',
    to: `${options.email}, pacharya97.pa@gmail.com`,
    subject: 'Result for online examinations',
    html: generateTemplate(options),
  });
}

module.exports = sendResult;
