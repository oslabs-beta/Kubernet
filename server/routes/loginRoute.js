const express = require('express');
const loginRouter = express.Router();

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const installController = require('../controllers/installController');

loginRouter.post(
  '/',
  userController.verifyUser,
  userController.getUrls,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(201).json(res.locals.URLS);
  }
);

module.exports = loginRouter;
