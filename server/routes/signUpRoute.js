const express = require('express');
const signUpRouter = express.Router();

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');


signUpRouter.post('/signUp', userController.createUser, sessionController.startSession, cookieController.setSSIDCookie, (req, res, next) => {
  res.sendStatus(200)
});

module.exports = signUpRouter;