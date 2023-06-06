const express = require('express');
const app = express();
const path = require('path');
const port = 5050;

const grafanaController = require('./controllers/grafanaOrgController');
app.use(express.json());

app.use('/create', 
  grafanaController.cpuUtil,
  grafanaController.cpuUtilGraph,
  grafanaController.memUtil,
  grafanaController.memUtilGraph, 
  (req, res) => {res.status(200).json(res.locals.URLS);
});

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
