import { Request, Response, NextFunction } from 'express';

const cookieController = {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => {
    res.cookie('ssid', res.locals.user, { httpOnly: true });
    return next();
  },
};

export default cookieController;
