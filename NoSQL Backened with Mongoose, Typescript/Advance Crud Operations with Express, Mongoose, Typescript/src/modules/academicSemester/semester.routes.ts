import express from 'express';
import { SemesterController } from './semester.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { SemesterZodValidation } from './semester.zod.validations';

const router = express.Router();

router.post('/create-academic-semester', validateRequest(SemesterZodValidation.SemesterZodValidationSchema), SemesterController.createSemester); 


export const SemesterRoutes = router ; 