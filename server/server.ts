import express, { Request, Response, NextFunction } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port: number = 5050;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

import loginRouter from './routes/loginRoute';
import signUpRouter from './routes/signUpRoute';
import deleteRouter from './routes/deleteRoute';
import installController from './controllers/installController';

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

// redirect to routes
app.use('/login', loginRouter);
app.use('/signup', signUpRouter);
app.use('/delete', deleteRouter);

app.get('/killPort', installController.killPort,  (req,res) => res.sendStatus(200));


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