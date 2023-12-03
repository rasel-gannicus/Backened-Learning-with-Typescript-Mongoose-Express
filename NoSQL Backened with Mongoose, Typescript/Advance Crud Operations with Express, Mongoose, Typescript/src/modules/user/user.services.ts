import config from "../../app/config";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";


// --- create a student's data
const createStudentIntoDB = async (password: string, studentData: Student) => {
  
  const userData : Partial<TUser> = {
    password : password || (config.default_Password as string),
    role : 'student' ,
    id : '11111'
  } ; 

  // --- create a user
  const newUser = await User.create(userData);

  // --- create a student after creating a user
  if(Object.keys(userData).length){
    studentData.id = newUser.id ;
    studentData.user = newUser._id ;
  }  

  const newStudent = await StudentModel.create(studentData) ; 
  return newStudent ; 
};



export const UserServices = {
  createStudentIntoDB,
};
