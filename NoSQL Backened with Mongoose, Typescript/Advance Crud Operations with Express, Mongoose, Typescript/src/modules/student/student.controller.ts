import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import catchAsync from '../../app/utils/catchAsync';


// --- get all student data
const getAllStudentsData = catchAsync(async (req: Request, res: Response) => {

    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students data retrieved successfully ',
      data: result,
    });

})

// --- get single student data
const getSingleStudent = catchAsync(async (req: Request, res: Response) => {

    const { studentId } = req.params
    const result = await StudentServices.getSingleStudent(studentId);

    res.status(200).json({
      success: true,
      message: 'Got Single Student data Successfully ',
      data: result
    })

})

export const StudentController = {
  getAllStudentsData,
  getSingleStudent
};
