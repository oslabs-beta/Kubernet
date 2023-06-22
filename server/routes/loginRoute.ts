import express, { Router, Request, Response } from 'express';
const loginRouter: Router = express.Router();

import userController from '../controllers/userController';
import cookieController from '../controllers/cookieController';
import sessionController from '../controllers/sessionController';
import grafanaController from '../controllers/grafanaController';
import installController from '../controllers/installController';

loginRouter.post(
  '/',
  userController.verifyUser,
  installController.promInstall,
  installController.grafEmbed,
  installController.portForward,
  grafanaController.createDashboard,
  userController.addUrls,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req: Request, res: Response) => {
    return res.status(201).json(res.locals.URLS);
  }
);

export default loginRouter;
