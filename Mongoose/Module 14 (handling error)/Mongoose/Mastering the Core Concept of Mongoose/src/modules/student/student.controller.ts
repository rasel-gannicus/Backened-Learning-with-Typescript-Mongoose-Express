import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const students = req.body.students;

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

// --- get all student data
const getAllStudentsData = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students data retrieved successfully ',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// --- get single student data
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const {studentId} = req.params
    const result = await StudentServices.getSingleStudent(studentId);

    res.status(200).json({
      success : true,
      message : 'Got Single Student data Successfully ',
      data : result
    })
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudentsData,
  getSingleStudent
};
