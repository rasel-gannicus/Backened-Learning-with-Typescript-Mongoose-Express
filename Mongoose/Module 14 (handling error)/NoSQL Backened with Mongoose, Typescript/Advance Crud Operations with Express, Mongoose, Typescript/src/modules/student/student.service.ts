import { Student } from './student.interface';
import { StudentModel } from './student.model';

// --- create a student's data
// const createStudentIntoDB = async (student: Student) => {
//   const result = await StudentModel.create(student);
//   return result;
// };

// --- get all student data
const getAllStudentsFromDB = async() => {
    const result = await StudentModel.find();
    return result ; 
}

// --- get single student data
const getSingleStudent = async(studentId : string) => {
    const result = await StudentModel.findOne({id : studentId}) ; 
    return result ; 
}

export const StudentServices = {
  // createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudent
};
