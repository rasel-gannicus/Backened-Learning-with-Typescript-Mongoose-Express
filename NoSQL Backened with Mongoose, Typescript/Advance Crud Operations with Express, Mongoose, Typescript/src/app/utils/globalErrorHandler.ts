/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const message = err.message || 'Something Went Wrong';

  return res.status(500).json({
    success: false,
    message: message,
    error: err,
  });
};

export default globalErrorHandler;
