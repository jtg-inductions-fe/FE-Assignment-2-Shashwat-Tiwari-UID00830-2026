/**
 * This file contains the zod schema for login validations.
 */
import { z } from 'zod';

export const loginSchema = z.object({
    email: z.email(),
    password: z.string(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
