import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

// --- creating middleware
const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //   console.log(req.body);
      // --- checking validation
      await schema.parseAsync({
        body: req.body.students,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;