import catchAsync from '../../app/utils/catchAsync';
import { SemesterServices } from './semester.service';

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
});

// --- get all semester
const getAllSemester = catchAsync(async (req, res) => {
  const result = await SemesterServices.getAllSemester();

  // send response
  res.status(200).json({
    success: true,
    message: 'All Semester retrieved successfully',
    data: result,
  });
});

// --- find single semester with semester id
const getSingleSemester = catchAsync(async (req, res) => {
  const id = req.params.semesterId;
  const result = await SemesterServices.getSingleSemester(id);

  // send response
  res.status(200).json({
    success: true,
    message: 'Single Semester retrieved successfully',
    data: result,
  });
});

// --- update a semester
const updateSemester = catchAsync(async (req, res) => {
  const id = req.params.semesterId;
  const doc = req.body;
  const result = await SemesterServices.updateSemester(id, doc);

  // send response
  res.status(200).json({
    success: true,
    message: 'Semester updated successfully',
    data: result,
  });
});

export const SemesterController = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester
};
