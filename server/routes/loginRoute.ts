import express, { Router } from 'express';
const loginRouter: Router = express.Router();

import userController from '../controllers/userController';
import cookieController from '../controllers/cookieController';
import sessionController from '../controllers/sessionController';

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

export default loginRouter;
