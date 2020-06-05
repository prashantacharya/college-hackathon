const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const loginController = require('./controller/auth');
const mailerController = require('./controller/mail');
const authenticate = require('./middlewares/authentication');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('App running successfully');
});

app.post('/auth/login', loginController);
app.post('/sendEmail', authenticate, mailerController);

app.listen(3001, () => {
  console.log('App running successfully');
});
