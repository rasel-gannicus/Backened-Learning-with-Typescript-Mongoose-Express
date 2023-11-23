import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const students  = req.body.students;
    console.log('Data from Server : ', students);

    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(students);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
};
