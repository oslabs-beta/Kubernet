const express = require('express');
const signUpRouter = express.Router();

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const grafanaController = require('../controllers/grafanaController');


signUpRouter.post('/',
  grafanaController.getPanels,
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie, 
(req, res, next) => { res.status(201).json(res.locals.URLS)});

module.exports = signUpRouter;