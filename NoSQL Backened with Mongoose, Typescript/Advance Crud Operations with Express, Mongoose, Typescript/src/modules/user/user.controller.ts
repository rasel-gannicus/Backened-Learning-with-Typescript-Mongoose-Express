import { UserServices } from './user.services';
import catchAsync from '../../app/utils/catchAsync';

// --- create a student data
const createUser = catchAsync(async (req, res) => {
  const { students, password } = req.body;

  console.log(req.body);

  // will call service function to send this data
  const result = await UserServices.createStudentIntoDB(password, students);

  // send response
  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
