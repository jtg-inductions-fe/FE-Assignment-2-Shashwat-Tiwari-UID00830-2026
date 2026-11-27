/**
 * This file contains all the type definitions related to Store Hours dialog
 */

import { Restaurant } from '@/state/types/restaurantSlice.types';

export interface StoreHourDialogProps {
    open: boolean;
    restaurant: Restaurant;
    onClose: () => void;
    onSaved: (message: string) => void;
}
