import { TAcademicSemester } from "./semester.interface";
import { SemesterModel } from "./semester.model";



const createSemesterIntoDB = async (payload : TAcademicSemester) => {
    const result = await SemesterModel.create(payload) ; 
    return result ;
}

export const SemesterServices = {
    createSemesterIntoDB
}