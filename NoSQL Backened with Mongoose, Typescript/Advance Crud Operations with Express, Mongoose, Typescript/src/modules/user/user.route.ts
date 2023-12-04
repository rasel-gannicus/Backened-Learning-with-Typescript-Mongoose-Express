import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { AnyZodObject } from 'zod';
import studentZodValidationSchema from '../student/student.zod.validation';

const router = express.Router();

// --- creating middleware
const validateRequest = (schema : AnyZodObject) => {
    return  (req : Request, res: Response, next : NextFunction) => {
        console.log('This is middleware');
        next();
      };
}

// --- will call controller function
router.post('/create-student', validateRequest(studentZodValidationSchema), UserController.createUser);

export const UserRoutes = router;
