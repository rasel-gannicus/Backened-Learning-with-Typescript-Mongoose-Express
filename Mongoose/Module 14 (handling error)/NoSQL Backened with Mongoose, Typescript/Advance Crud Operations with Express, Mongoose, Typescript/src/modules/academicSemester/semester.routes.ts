import express from 'express';
import { SemesterController } from './semester.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { SemesterZodValidation } from './semester.zod.validations';

const router = express.Router();

// --- create semester into db
router.post(
  '/create-academic-semester',
  validateRequest(SemesterZodValidation.SemesterZodValidationSchema),
  SemesterController.createSemester,
);

// --- get all the semester from db
router.get('/get-all-semester', SemesterController.getAllSemester);

// --- find single semester with semester id
router.get('/:semesterId', SemesterController.getSingleSemester);

// --- update a semester
router.patch(
  '/:semesterId',
  validateRequest(SemesterZodValidation.updateSemesterZodValidationSchema),
  SemesterController.updateSemester,
);

export const SemesterRoutes = router;
