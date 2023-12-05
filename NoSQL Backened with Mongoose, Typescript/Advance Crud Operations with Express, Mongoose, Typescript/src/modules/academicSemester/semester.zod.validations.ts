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

export const SemesterZodValidation = {
  SemesterZodValidationSchema,
};
