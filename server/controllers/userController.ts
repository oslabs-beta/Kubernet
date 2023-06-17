import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';
import bcrypt from 'bcryptjs';

interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
  getUrls: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: UserController = {
  createUser: (req: Request, res: Response, next: NextFunction) => {
    const urls = res.locals.URLS;
    const { username, password } = req.body;

    User.create({ username, password, urls })
      .then((newUser) => {
        res.locals.user = newUser.id;
        return next();
      })
      .catch((err: any) => {
        return next({
          log: `createUser: ${err}`,
          status: 400,
          message: { err: 'An error occured in the createUser controller' },
        });
      });
  },

  verifyUser: (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    User.findOne({ username })
      .then((user) => {
        if (!user) {
          res.sendStatus(404);
        } else {
          bcrypt.compare(password, user.password).then((result) => {
            if (!result) {
              res.sendStatus(401);
            } else {
              res.locals.user = user.id;
              return next();
            }
          });
        }
      })
      .catch((err: any) => {
        return next({
          log: `error ${err}`,
          status: 400,
          message: { err: `error occured in login controller` },
        });
      });
  },

  getUrls: (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.user;
    User.findById({ _id: id }).then((user) => {
      const { urls } = user;
      res.locals.URLS = urls;
      return next();
    });
  },
};

export default userController;
