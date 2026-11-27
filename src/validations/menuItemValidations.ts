/**
 * This file contains the validation schema for the menu item form
 */

import { z } from 'zod';

export const menuItemSchema = z.object({
    name: z.string().trim().min(2, 'Name must be atleast 2 characters'),
    description: z.string().trim().min(5, 'Add a short description'),
    category: z.string().trim().min(2, 'Category is required'),
    type: z.enum(['veg', 'non-veg']),
    price: z
        .string()
        .trim()
        .min(1, 'Price is required')
        .refine((value) => Number(value) > 0, 'Price must be greater than 0'),
    stock: z.string().trim().min(1, 'Stock is required'),
    image: z.url('Enter a valid URL'),
});

export type MenuItemFormValues = z.infer<typeof menuItemSchema>;
