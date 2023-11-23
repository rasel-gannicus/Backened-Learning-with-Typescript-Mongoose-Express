import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// --- parser
app.use(express.json());
app.use(cors());

// --- using router
// app.use('/api/v1/students', Student)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
