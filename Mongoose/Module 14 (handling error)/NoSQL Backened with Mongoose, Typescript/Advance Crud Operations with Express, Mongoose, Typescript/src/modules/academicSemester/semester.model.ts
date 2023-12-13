import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './semester.interface';
import {
  months,
  semesterCodeSchema,
  semesterNameSchema,
} from './semester.constants';

export const semesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: semesterNameSchema, required: true },
    code: { type: String, enum: semesterCodeSchema, required: true },
    year: { type: String, required: true },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true },
  },
  {
    timestamps: true,
  },
);

// --- this middlware will prevent creating duplicate semester in same year
semesterSchema.pre('save', async function (next) {
  const isSemesterExists = await SemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('Semester already exists !');
  }
  next();
});

export const SemesterModel = model<TAcademicSemester>(
  'Semester',
  semesterSchema,
);
