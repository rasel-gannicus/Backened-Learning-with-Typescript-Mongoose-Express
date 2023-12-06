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

export const SemesterServices = {
  createSemesterIntoDB,
};
