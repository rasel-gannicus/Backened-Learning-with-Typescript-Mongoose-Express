"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherContactNo: { type: String, required: true },
    motherOccupation: { type: String, required: true },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: userNameSchema,
    gender: ['male', 'female'],
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    parmanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: { type: String, required: true },
    isActive: ['active', 'inActive'],
});
exports.StudentModel = (0, mongoose_1.model)('StudentModel', studentSchema);
