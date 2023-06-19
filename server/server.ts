import express, { Request, Response, NextFunction } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port: number = 5050;

const app = express();

import installController from './controllers/installController';

app.use(express.json());
app.use(cookieParser());
app.use(cors());

import loginRouter from './routes/loginRoute';
import signUpRouter from './routes/signUpRoute';
import deleteRouter from './routes/deleteRoute';

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

// redirect to routes
app.use('/login', loginRouter);
app.use('/signup', signUpRouter);
app.use('/delete', deleteRouter);

app.use(
  '/install',
  installController.promInstall,
  installController.grafEmbed,
  installController.portForward,
  (req: Request, res: Response) => {
    return res.status(200).json('End');
  }
);

app.use(
  '/portforward',
  installController.portForward,
  (req: Request, res: Response) => {
    return res.status(200).json('Port-Forward Successful');
  }
);

app.use((req: Request, res: Response) =>
  res.status(404).send('Page Not Found')
);

app.use(
  (
    err: { log?: string; status?: number; message?: { err: string } },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultErr: {
      log: string;
      status: number;
      message: { err: string };
    } = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;