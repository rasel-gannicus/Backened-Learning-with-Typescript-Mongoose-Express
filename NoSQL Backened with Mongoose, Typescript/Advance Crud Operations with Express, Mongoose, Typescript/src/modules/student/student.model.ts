import { Schema, model } from 'mongoose';
import validator from 'validator';

import {
  Guardian,
  LocalGuardian,
  Student,
  Username,
} from './student.interface';

const userNameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: true,
    maxlength: [20, 'First Name cannot exceed 20 letter'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  middleName: { type: String, required: true },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value), //-- validating using npm 'validator' package, and checking if it has any number value
      message: '{VALUE} is not text Only type',
    },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User ID is required !'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name den nai bro'],
    ref: 'User',
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "{VALUE} dile hobena, Only 'male', 'female' & 'other' keywords are excepted ",
    },
    required: [true, 'Gender den nai bro'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value), //-- validating using npm 'validator' package, and checking if it is valid email type
      message: 'Email is not valid',
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
});

export const StudentModel = model<Student>('Student', studentSchema);
