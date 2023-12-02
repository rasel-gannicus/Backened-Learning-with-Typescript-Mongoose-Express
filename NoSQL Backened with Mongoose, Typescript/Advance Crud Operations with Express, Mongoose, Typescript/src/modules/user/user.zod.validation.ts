import { z } from "zod";



const userValidationSchema = z.object({
    password: z.string({invalid_type_error : 'Password must be string'})
        .min(6, { message: 'Minimum 6 character needed for password field' })
        .max(10, { message: 'Password can not exceed 20 character' })
        .optional(),
})


export const UserZodValidation = {
    userValidationSchema
}