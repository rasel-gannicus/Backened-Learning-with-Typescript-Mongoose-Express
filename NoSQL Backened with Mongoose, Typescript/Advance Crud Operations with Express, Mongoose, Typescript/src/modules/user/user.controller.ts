import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.services';

const catchAsync = (fn : RequestHandler) => {
  return (req : Request, res : Response, next : NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err)=> next(err)) ;
  } 
}

// --- create a student data
const createUser = catchAsync(async (req, res, next) => {

    const { students, password } = req.body;

    // will call service function to send this data
    const result = await UserServices.createStudentIntoDB(password, students);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });

})

export const UserController = {
  createUser,
};
