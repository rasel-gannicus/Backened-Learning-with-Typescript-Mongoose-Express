import { Request, Response } from 'express';

// --- create a student data
const createUser = async (req: Request, res: Response) => {
  try {
    const students = req.body.students;

    const zodParsedData = studentZodValidationSchema.parse(students)

    // will call service function to send this data
    const result = await StudentServices.createUserIntoDB(zodParsedData);

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



export const StudentController = {
  createUser,
};
