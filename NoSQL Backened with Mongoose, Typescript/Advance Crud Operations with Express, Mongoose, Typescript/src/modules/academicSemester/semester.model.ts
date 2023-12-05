import { Schema, model } from 'mongoose';
import {
  TAcademicSemester
} from './semester.interface';
import { months, semesterCodeSchema, semesterNameSchema } from './semester.constants';



export const semesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: semesterNameSchema, required: true },
    code: { type: String, enum: semesterCodeSchema, required: true },
    year: { type: Date, required: true },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true },
  },
  {
    timestamps: true,
  },
);


export const SemesterModel = model <TAcademicSemester>('Semister', semesterSchema);