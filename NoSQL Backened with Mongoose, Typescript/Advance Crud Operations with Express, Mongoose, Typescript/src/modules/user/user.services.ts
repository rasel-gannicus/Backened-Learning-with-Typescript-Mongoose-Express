

// --- create a student's data
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};



export const UserServices = {
  createStudentIntoDB,
};
