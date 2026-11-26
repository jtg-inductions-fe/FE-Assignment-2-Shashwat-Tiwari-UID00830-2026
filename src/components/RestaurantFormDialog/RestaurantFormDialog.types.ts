/**
 * This file contains the type definitions for the Restaurant Form dialog component
 */
import { Restaurant } from '@/state/types/restaurantSlice.types';

export interface RestaurantFormDialogProps {
    open: boolean;
    restaurant: Restaurant | null;
    ownerId: string;
    onClose: () => void;
    onSaved: (message: string) => void;
}
