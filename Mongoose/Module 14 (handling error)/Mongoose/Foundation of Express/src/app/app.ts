import express, { NextFunction, Request, Response } from 'express'
const app = express(); 
app.use(express.json());
app.use(express.text());

// --------------------------------------------- Middleware
const logger = (req : Request, res : Response, next : NextFunction) => {
    // console.log(req.url, req.method, req.hostname);
    next();
}

// --------------------------------------------- router starts
const userRouter = express.Router() ; 
const courseRouter = express.Router() ; 

app.use('/api/v1/users', userRouter) ; 
app.use('/api/v1', courseRouter) ; 

userRouter.get("/createUser", (req:Request, res:Response)=> {
  const user = req.body ; 
  console.log(user);

  res.json({
      success : true,
      message : "User is created Successfully" ,
      data : user
  })
})

courseRouter.post('/course/createCourse', (req:Request, res:Response) => {
  const course = req.body ;
  console.log(course);
  res.json({
    success : true ,
    message : 'Course has been created !',
    data : course
  })
})

// --------------------------------------------- router ends

app.get('/', logger, (req:Request, res:Response) => {
  res.send('Hello Coders !') ; 
})

app.post('/', logger, (req:Request, res:Response)=>{
    console.log(req.body);
    res.send('Successfully received data');
})



export default app ; 