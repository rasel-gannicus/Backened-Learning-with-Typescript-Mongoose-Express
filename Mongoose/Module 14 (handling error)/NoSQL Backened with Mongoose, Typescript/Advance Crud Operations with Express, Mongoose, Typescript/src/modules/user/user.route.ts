import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import studentZodValidationSchema from '../student/student.zod.validation';
import validateRequest from '../../app/middlewares/validateRequest';

const router = express.Router();



// --- will call controller function
router.post(
  '/create-student',
  validateRequest(studentZodValidationSchema),
  UserController.createUser,
);

export const UserRoutes = router;
