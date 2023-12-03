import { Request, Response } from 'express';
import { UserServices } from './user.services';

// --- create a student data
const createUser = async (req: Request, res: Response) => {
  try {
    const {students, password} = req.body;
    
    console.log('Req.body : ', req.body);

    // will call service function to send this data
    const result = await UserServices.createStudentIntoDB(password,students);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: err
    })
  }
};



export const UserController = {
  createUser,
};
