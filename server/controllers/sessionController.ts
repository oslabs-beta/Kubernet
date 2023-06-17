import { Request, Response, NextFunction } from 'express';
import Session from '../models/sessionModel';

const sessionController = {
  startSession: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Session.findOneAndUpdate(
        { cookieId: res.locals.user },
        { createdAt: Date.now() },
        { upsert: true, setDefaultsOnInsert: true }
      );
      return next();
    } catch (err: any) {
      return next({
        log: 'error in startSession controller',
        status: 500,
        message: 'Error in creating/finding cookie',
      });
    }
  },
};

export default sessionController;
