/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';

const app: Application = express();

// --- parser
app.use(express.json());
app.use(cors());

// --- using router
// app.use('/api/v1/students', StudentRoutes);
// app.use('/api/v1/users', UserRoutes);
app.use('/api/v1',router) ; 

// --- global error handler
app.use((err : any, req : Request, res: Response)=>{
  const message = err.message || 'Something Went Wrong' ;
  return res.status(500).json({
    success : false,
    message : message, 
    error : err 
  })
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
