/* eslint-disable @typescript-eslint/no-explicit-any */
import { SemesterCodeWithNameMapper } from './semester.constants';
import { TAcademicSemester } from './semester.interface';
import { SemesterModel } from './semester.model';

// --- creating new semester into DB
const createSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await SemesterModel.create(payload);

  // --- checking if the semester code is valid with name
  if (SemesterCodeWithNameMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  return result;
};

// --- find all semester from db
const getAllSemester = async () => {
  const result = SemesterModel.find();
  return result;
};

// --- find single semester with semester id
const getSingleSemester = async (payload: string) => {
  const result = await SemesterModel.findById(payload);
  return result;
};

// --- update a semester
const updateSemester = async (semesterId: string, updatedDoc : any) => {
    const result = await SemesterModel.findByIdAndUpdate(semesterId,updatedDoc) ; 
    const result2 = await SemesterModel.findById(semesterId) ; 
    // console.log(result2);
    return result2 ; 
};

export const SemesterServices = {
  createSemesterIntoDB,
  getAllSemester,
  getSingleSemester,
  updateSemester
};
