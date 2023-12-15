import mongoose from "mongoose";
import { TErrorSource, TGenericErrorResponse } from "../interfaces/errors";


// --- making error handler for zoderror
const handleCastError = (err: mongoose.Error.CastError) : TGenericErrorResponse => {
    const errorSources: TErrorSource = [
        {
            path : err.path ,
            message : err.message 
        }
    ]
    const statusCode = 400;
  
    return {
      statusCode,
      message: 'Invalid Input',
      errorSources,
    };
  };
  
  export default handleCastError;