/**
 * This file contains the zod schema for register validations.
 */
import { z } from 'zod';

export const registerSchema = z.object({
    name: z
        .string({ error: 'Name is required' })
        .trim()
        .min(1, 'Name is required'),
    email: z.email(),
    password: z.string().min(8, 'Password is too small'),
    role: z.enum(['Customer', 'Owner']),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
