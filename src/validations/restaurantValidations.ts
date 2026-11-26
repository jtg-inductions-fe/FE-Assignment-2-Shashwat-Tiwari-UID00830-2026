/**
 * This file contains the zod schema for restaurant Form validations
 */
import { z } from 'zod';

export const restaurantSchema = z.object({
    name: z.string().trim().min(2, 'Name must be atleast 2 Characters'),
    cuisine: z.string().trim().min(2, 'Cuisine is required'),
    type: z.enum(['veg', 'non-veg']),
    image: z.url('Enter a valid URL'),
    address: z.string().trim().min(5, 'Address is required'),
});

export type RestaurantFormValues = z.infer<typeof restaurantSchema>;
