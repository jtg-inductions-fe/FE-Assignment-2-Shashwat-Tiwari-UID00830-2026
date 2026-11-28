/**
 * This file contains the zod schema for restaurant Form validations
 */
import { z } from 'zod';

export const restaurantSchema = z
    .object({
        name: z.string().trim().min(2, 'Name must be atleast 2 Characters'),
        cuisine: z.string().trim().min(2, 'Cuisine is required'),
        type: z.enum(['veg', 'non-veg']),
        image: z.url('Enter a valid URL'),
        address: z.string().trim().min(5, 'Address is required'),
        openHours: z.string().min(1, 'Opening time is required'),
        closeHours: z.string().min(1, 'Closing time is required'),
    })
    .refine((values) => values.openHours < values.closeHours, {
        message: 'Opening time must be before the closing time',
    });

export type RestaurantFormValues = z.infer<typeof restaurantSchema>;
