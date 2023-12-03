import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';

// --- create a student data
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { students, password } = req.body;

    // will call service function to send this data
    const result = await UserServices.createStudentIntoDB(password, students);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createUser,
};
