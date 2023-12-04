/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './utils/globalErrorHandler';

const app: Application = express();

// --- parser
app.use(express.json());
app.use(cors());

// --- using router
// app.use('/api/v1/students', StudentRoutes);
// app.use('/api/v1/users', UserRoutes);
app.use('/api/v1',router) ; 

// --- global error handler
app.use(globalErrorHandler)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
