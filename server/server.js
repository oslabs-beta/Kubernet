const express = require('express');
const app = express();
const path = require('path');
const port = 5050;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const installController = require('./controllers/installController');

const grafanaController = require('./controllers/grafanaController');

app.use(express.json());
app.use(cookieParser());

const loginRouter = require('./routes/loginRoute');
const signUpRouter = require('./routes/signUpRoute');

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// redirect to routes
app.use('/login', loginRouter);
app.use('/signup', signUpRouter);

app.use(
  '/install',
  installController.promInstall,
  installController.grafEmbed,
  installController.portForward,
  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE' // what matters here is that OPTIONS is present
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    console.log('I reached the end');
    return res.status(200).json('End');
  }
);

app.use((req, res) => res.status(404).send('Page Not Found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
