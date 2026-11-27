/**
 * This file contains the edit hours form validations
 */

import { z } from 'zod';

export const hoursSchema = z
    .object({
        openHours: z.string().min(1, 'Opening time is required'),
        closeHours: z.string().min(1, 'Closing time is required'),
    })
    .refine((hours) => hours.openHours < hours.closeHours, {
        message: 'Opening time must not be before closing time',
    });

export type HoursFormValues = z.infer<typeof hoursSchema>;
