import { z } from 'zod';
import {
  months,
  semesterCodeSchema,
  semesterNameSchema,
} from './semester.constants';

const SemesterZodValidationSchema = z.object({
  body: z.object({
    name: z.enum([...semesterNameSchema] as [string, ...string[]]),
    code: z.enum([...semesterCodeSchema] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

const updateSemesterZodValidationSchema = z.object({
  body: z.object({
    name: z.enum([...semesterNameSchema] as [string, ...string[]]).optional(),
    code: z.enum([...semesterCodeSchema] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...months] as [string, ...string[]]).optional(),
  }),
});

export const SemesterZodValidation = {
  SemesterZodValidationSchema,
  updateSemesterZodValidationSchema,
};
