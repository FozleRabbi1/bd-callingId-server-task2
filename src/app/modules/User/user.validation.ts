import { z } from 'zod';

const userCreateValidationNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(10, 'Name can not be more than 10 characters')
    .min(1, 'First name is required'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, 'Last name is required'),
});

const createUserValidationSchema = z.object({
  body: z.object({
    user: z.object({
      password: z
        .string()
        .min(5, { message: 'password can not be less then 5 characters' })
        .max(10, { message: 'password can not be more than 10 characters' })
        .optional(),
      name: userCreateValidationNameSchema,
      email: z
        .string()
        .email('Invalid email address')
        .min(1, 'Email is required'),
    }),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};
