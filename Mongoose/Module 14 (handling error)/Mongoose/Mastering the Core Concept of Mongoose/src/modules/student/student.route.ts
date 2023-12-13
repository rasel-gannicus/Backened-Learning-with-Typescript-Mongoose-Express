import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// --- will call controller function
router.post('/create-student', StudentController.createStudent);

// --- get all students data from DB 
router.get('/getAllStudents', StudentController.getAllStudentsData);

// --- get single student data
router.get('/singleStudent/:studentId', StudentController.getSingleStudent)

export const StudentRoutes = router;
