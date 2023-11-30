import { z } from 'zod';

const userNameZodValidationSchema = z.object({
  firstName: z.string()  ,
  middleName: z.string(),
  lastName: z.string().refine((value) => /^[A-Za-z]+$/.test(value), {
    message: 'Last Name must contain only letters.',
  }),
});

const guardianZodValidationSchema = z.object({
  fatherName: z.string(),
  fatherContactNo: z.string(),
  fatherOccupation: z.string(),
  motherName: z.string(),
  motherContactNo: z.string(),
  motherOccupation: z.string(),
});

const localGuardianZodValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const studentZodValidationSchema = z.object({
  id: z.string(),
  name: userNameZodValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo : z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  parmanentAddress: z.string(),
  guardian: guardianZodValidationSchema,
  localGuardian: localGuardianZodValidationSchema,
  profileImg: z.string(),
  isActive: z.enum(['active', 'inActive']).default('active'),
});

export default studentZodValidationSchema;
