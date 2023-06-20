import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';
import bcrypt from 'bcryptjs';

interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
  deleteUser: (req: Request, res: Response, next: NextFunction) => void;
  addUrls: (req: Request, res: Response, next: NextFunction) => void;
  // getUrls: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: UserController = {
  createUser: (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    User.create({ username, password })
      .then((newUser) => {
        res.locals.user = newUser;
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
          return next({  log: `error`,
          status: 401,
          message: { err: `error occured in verifUser middleware function` },
        })
        } else {
          bcrypt.compare(password, user.password).then((result) => {
            if (!result) {
              return next({  log: `error`,
              status: 401,
              message: { err: `error occured in verifUser middleware function` },
            })
            } else {
              res.locals.user = user;
              if (user.urls) res.locals.URLS = user.urls[0];
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
  deleteUser: (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.user;
    User.findOneAndDelete({ _id: id })
      .then(user => next())
      .catch(err => next({
        log: `error ${err}`,
        status: 500,
        message: { err: `error occured in deleteUser middleware function` },
      }));

  },
  addUrls: (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.createdNewDashboard === false) {
      return next()
    };
    const id = res.locals.user.id;
    User.findOneAndUpdate({ _id: id },{ $push: { urls: res.locals.URLS } })
      .then(user => {
        return next()})
      .catch(err => next({
        log: `error ${err}`,
        status: 500,
        message: { err: `error occured in deleteUser middleware function` },
      }))
  },
};

export default userController;
