import express from 'express';
const signUpRouter = express.Router();

import grafanaController from '../controllers/grafanaController';

import userController from '../controllers/userController';
import cookieController from '../controllers/cookieController';
import sessionController from '../controllers/sessionController';

signUpRouter.post(
  '/',
  grafanaController.getPanels,
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res, next) => {
    res.status(201).json(res.locals.URLS);
  }
);

export default signUpRouter;
