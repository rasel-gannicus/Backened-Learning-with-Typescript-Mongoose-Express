import { z } from "zod";



const userValidationSchema = z.object({
    id : z.string(),
    password : z.string().max(20,{message : 'Password can not exceed 20 character'}),
    needPasswordChange : z.boolean().optional().default(true),
    role : z.enum(['admin', 'student', 'faculty']),
    status : z.enum(['in-progress', 'blocked']).default('in-progress'),
    isDeleted : z.boolean().default(false)
})


export const UserZodValidation = {
    userValidationSchema
}