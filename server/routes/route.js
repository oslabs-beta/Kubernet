const express = require('express');
const loginRouter = express.Router();

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');


loginRouter.post('/signUp', userController.createUser, sessionController.startSession, cookieController.setSSIDCookie, (req, res) => {
  return res.sendStatus(200);
})

loginRouter.post('/loginUser', userController.verifyUser, sessionController.startSession, cookieController.setSSIDCookie, (req,res) => {
  return res.sendStatus(200);
})

module.exports = loginRouter;