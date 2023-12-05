import catchAsync from "../../app/utils/catchAsync";
import { SemesterServices } from "./semester.service";



// --- create a student data
const createSemester = catchAsync(async (req, res) => {

    // will call service function to send this data
    const result = await SemesterServices.createSemesterIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: 'Semester is created successfully',
      data: result,
    });
})

export const SemesterController = {
  createSemester,
};
