import config from "../../app/config";
import { Student } from "../student/student.interface";
import { NewUser } from "./user.interface";
import { User } from "./user.model";


// --- create a student's data
const createStudentIntoDB = async (password: string, studentData: Student) => {
  const user : NewUser = {
    password : password || (config.default_Password as string),
    role : 'student' ,
    id : '11111'
  } ; 

  // --- create a user
  const result = await User.create(user);

  // --- create a student after creating a user
  if(Object.keys(user).length){
    studentData.id = result.id ;
    studentData.user = result._id ;
  }
  return result;
};



export const UserServices = {
  createStudentIntoDB,
};
