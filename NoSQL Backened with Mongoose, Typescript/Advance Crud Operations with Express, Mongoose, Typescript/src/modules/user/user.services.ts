import config from "../../app/config";
import { Student } from "../student/student.interface";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";


// --- create a student's data
const createStudentIntoDB = async (password: string, studentData: Student) => {
  const userData : Partial<TUser> = {
    password : password || (config.default_Password as string),
    role : 'student' ,
    id : '11111'
  } ; 

  // --- create a user
  const result = await User.create(userData);

  // --- create a student after creating a user
  if(Object.keys(userData).length){
    studentData.id = result.id ;
    studentData.user = result._id ;
  }
  return result;
};



export const UserServices = {
  createStudentIntoDB,
};
